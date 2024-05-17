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
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const types_1 = require("./types");
const cloudinary_1 = require("cloudinary");
const worker_1 = require("./worker");
const web3_js_1 = require("@solana/web3.js");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
require('dotenv').config();
const connection = new web3_js_1.Connection('https://solana-devnet.g.alchemy.com/v2/oFWFCLUFOPgvg7Ac--JNtWABQ1jvjdUj');
const PARENT_WALLET_ADDRESS = '6toiurfNa7x1d69qGvbYaKzbsyTfuq99vcf4bocYnreW';
const JWT_SECRET = process.env.JWT_SECRET;
const userRouter = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const worker = yield prismaClient.worker.findUnique({ where: { address: publicKey } });
        if (worker) {
            return res.status(401).json({
                success: false,
                message: "Wallet linked to worker."
            });
        }
        // if exists then login else create
        const user = yield prismaClient.user.upsert({
            where: {
                address: publicKey
            },
            create: {
                address: publicKey
            },
            update: {}
        });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET);
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
userRouter.post('/task', auth_1.isUser, upload.array('options'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const userId = req.userId;
    const userData = yield prismaClient.user.findUnique({
        where: {
            id: userId
        }
    });
    if (!userData) {
        return res.json({
            sucess: false,
            message: "User not found"
        });
    }
    // @ts-ignore
    // const uploadPromises = req.files.map(file => {
    //     return cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
    //       if (error) {
    //         throw error;
    //       }
    //       return result;
    //     }).end(file.buffer);
    // });
    // const results = await Promise.all(uploadPromises);
    // const imageUrls = results.map((result:{secure_url:string}) => result.secure_url);
    // console.log(imageUrls);
    const uploadPromises = req.files.map(file => {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
            uploadStream.end(file.buffer);
        });
    });
    const results = yield Promise.all(uploadPromises);
    const imageUrls = results.map((result) => result.secure_url);
    const { title, signature } = req.body;
    const inputData = {
        title, signature, options: imageUrls.map((url) => ({ imageUrl: url }))
    };
    console.log(inputData);
    const parseData = types_1.createTaskInput.safeParse(inputData);
    if (!parseData.success) {
        return res.status(411).json({ success: false, message: "Invalid input." });
    }
    const transaction = yield connection.getTransaction(parseData.data.signature, {
        maxSupportedTransactionVersion: 1
    });
    if (((_b = (_a = transaction === null || transaction === void 0 ? void 0 : transaction.meta) === null || _a === void 0 ? void 0 : _a.postBalances[1]) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = transaction === null || transaction === void 0 ? void 0 : transaction.meta) === null || _c === void 0 ? void 0 : _c.preBalances[1]) !== null && _d !== void 0 ? _d : 0) != 1000000) {
        return res.status(411).json({
            success: false,
            message: 'Transaction signature/amount incorrect'
        });
    }
    if (((_e = transaction === null || transaction === void 0 ? void 0 : transaction.transaction.message.getAccountKeys().get(1)) === null || _e === void 0 ? void 0 : _e.toString()) !== PARENT_WALLET_ADDRESS) {
        return res.status(411).json({
            success: false,
            message: "Paid to wrong address"
        });
    }
    if (((_f = transaction === null || transaction === void 0 ? void 0 : transaction.transaction.message.getAccountKeys().get(0)) === null || _f === void 0 ? void 0 : _f.toString()) !== (userData === null || userData === void 0 ? void 0 : userData.address.toString())) {
        return res.status(411).json({
            success: false,
            message: "Paid from wrong address"
        });
    }
    yield prismaClient.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tx.task.create({
            data: {
                title: parseData.data.title || "Click the best thumbnail",
                signature: parseData.data.signature,
                amount: worker_1.TOTAL_DECIMALS,
                userId: req.userId
            }
        });
        yield tx.option.createMany({
            data: parseData.data.options.map(_ => ({
                image_url: _.imageUrl,
                taskId: response.id
            }))
        });
        return res.status(200).json({
            id: response.id,
        });
    }));
}));
userRouter.get('/tasks', auth_1.isUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.body;
    const taskDetails = yield prismaClient.task.findFirst({
        where: {
            userId: req.userId,
            id: Number(taskId)
        }
    });
    if (!taskDetails) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
    const responses = yield prismaClient.submission.findMany({
        where: {
            taskId: Number(taskId)
        },
        include: {
            option: true
        }
    });
    console.log(responses);
    const result = {};
    responses.forEach(r => {
        if (!result[r.option_id]) {
            result[r.option_id] = {
                count: 0,
                option: { image_url: r.option.image_url }
            };
        }
        else {
            result[r.option_id].count++;
        }
    });
    res.json({ result });
}));
userRouter.get('/balance', auth_1.isUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const user = yield prismaClient.worker.findFirst({
        where: {
            id: userId
        }
    });
    return res.json({
        pending_amount: user === null || user === void 0 ? void 0 : user.pending_amount,
        locked_amount: user === null || user === void 0 ? void 0 : user.locked_amount
    });
}));
exports.default = userRouter;
