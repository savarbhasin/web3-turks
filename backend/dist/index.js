"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./router/user"));
const worker_1 = __importDefault(require("./router/worker"));
const cors_1 = __importDefault(require("cors"));
// import cookieParser from 'cookie-parser';
const cloudinary_1 = require("./utils/cloudinary");
const fileUpload = require('express-fileupload');
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cookieParser())
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/v1/user', user_1.default);
app.use('/v1/worker', worker_1.default);
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
}));
app.listen(3001, () => {
    (0, cloudinary_1.cloudinaryConnect)();
    console.log('Server is running on http://localhost:3001');
});
