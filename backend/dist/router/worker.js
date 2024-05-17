"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOTAL_DECIMALS = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const db_1 = require("../db");
const types_1 = require("./types");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const web3_js_1 = require("@solana/web3.js");
require('dotenv').config();
const workerRouter = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
exports.TOTAL_DECIMALS = 1000000000;
const MAX_SUBMISSIONS = 100;
workerRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { publicKey, signature, message } = req.body;
        // verify the signature
        let signatureBytes;
        if (signature.type === 'Buffer') {
            signatureBytes = new Uint8Array(signature.data);
        }
        else {
            signatureBytes = new Uint8Array(Object.values(signature));
        }
        const result = tweetnacl_1.default.sign.detached.verify(new Uint8Array(message), signatureBytes, new web3_js_1.PublicKey(publicKey).toBytes());
        const user = yield prismaClient.user.findUnique({ where: { address: publicKey } });
        if (user) {
            return res.status(401).json({
                success: false,
                message: "Wallet linked to user."
            });
        }
        // if exists then login else create
        const worker = yield prismaClient.user.upsert({
            where: {
                address: publicKey
            },
            create: {
                address: publicKey
            },
            update: {}
        });
        const token = jsonwebtoken_1.default.sign({ userId: worker.id }, process.env.JWT_SECRET);
        res.cookie('token', token, { httpOnly: true });
        return res.status(200).json({ sucess: true, token });
    }
    catch (e) {
        return res.status(401).json({
            success: false,
            message: e.message
        });
    }
}));
workerRouter.get('/nextTask', auth_1.isWorker, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const taskDetails = yield (0, db_1.getNextTask)(userId);
    if (!taskDetails) {
        return res.json({ message: "No Task Available" });
    }
    else {
        return res.json({ taskDetails });
    }
}));
workerRouter.post('/submission', auth_1.isWorker, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedData = types_1.submissionInput.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(401).json({ message: 'Invalid Input' });
    }
    const userId = req.userId;
    const nextTask = yield (0, db_1.getNextTask)(userId);
    if (!nextTask || nextTask.id != parsedData.data.taskId) {
        return res.status(401).json({ message: 'Invalid Task' });
    }
    const submission = yield prismaClient.submission.create({
        data: {
            option_id: parsedData.data.optionId,
            taskId: parsedData.data.taskId,
            workerId: userId,
            amount: nextTask.amount / MAX_SUBMISSIONS,
            submissionDate: new Date()
        }
    });
    yield prismaClient.worker.update({
        where: {
            id: userId
        },
        data: {
            pending_amount: {
                increment: submission.amount
            }
        }
    });
    const nextTaskNow = yield (0, db_1.getNextTask)(userId);
    res.json({
        nextTask: nextTaskNow !== null && nextTaskNow !== void 0 ? nextTaskNow : "No tasks left",
        amount: submission.amount
    });
}));
workerRouter.post('/payout', auth_1.isWorker, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const workerData = yield prismaClient.worker.findFirst({
        where: {
            id: userId
        }
    });
    if (!workerData) {
        return res.status(401).json({ message: 'Invalid Worker' });
    }
    const txnId = '123';
    yield prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.worker.update({
            where: {
                id: userId
            },
            data: {
                pending_amount: {
                    decrement: workerData.pending_amount
                },
                locked_amount: {
                    increment: workerData.pending_amount
                }
            }
        });
        yield tx.payouts.create({
            data: {
                workerId: userId,
                amount: workerData.pending_amount,
                payoutDate: new Date(),
                status: "Processing",
                signature: txnId
            }
        });
    }));
    res.json({
        message: "Processing Payout",
        success: true,
        amount: workerData.pending_amount
    });
}));
exports.default = workerRouter;
