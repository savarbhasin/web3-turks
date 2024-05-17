import express from 'express';
import userRouter from './router/user';
import workerRouter from './router/worker';
import cors from 'cors';
// import cookieParser from 'cookie-parser';
import {cloudinaryConnect} from './utils/cloudinary';
const fileUpload = require('express-fileupload');

const app = express();





app.use(express.json());
// app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/v1/user',userRouter);
app.use('/v1/worker',workerRouter);

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:'/tmp'
}))




app.listen(3001, () => {
  cloudinaryConnect();
  console.log('Server is running on http://localhost:3001');
});
