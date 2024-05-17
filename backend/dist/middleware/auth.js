"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorker = exports.isUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
function isUser(req, res, next) {
    var _a, _b, _c;
    const token = (_b = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : (_c = req.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            return next();
        }
        else {
            return res.status(403).json({ message: 'Unauthorized' });
        }
    }
    catch (e) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
}
exports.isUser = isUser;
function isWorker(req, res, next) {
    var _a, _b, _c;
    const token = (_b = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : (_c = req.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_WORKER);
        if (decoded.userId) {
            req.userId = decoded.userId;
            return next();
        }
        else {
            return res.status(403).json({ message: 'Unauthorized' });
        }
    }
    catch (e) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
}
exports.isWorker = isWorker;
