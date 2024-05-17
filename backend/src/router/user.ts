import nacl from "tweetnacl";
import { Router, Request, Response, response } from "express";
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { isUser } from "../middleware/auth";
import { createTaskInput } from "./types";
import {v2 as cloudinary} from 'cloudinary';
import { TOTAL_DECIMALS } from "./worker";
import { Connection, PublicKey } from "@solana/web3.js";

require('dotenv').config();

cloudinary.config({ 
    cloud_name: "dfvyupsy0", 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});



const connection = new Connection('https://solana-devnet.g.alchemy.com/v2/oFWFCLUFOPgvg7Ac--JNtWABQ1jvjdUj');
const PARENT_WALLET_ADDRESS = '6toiurfNa7x1d69qGvbYaKzbsyTfuq99vcf4bocYnreW'
const JWT_SECRET =  process.env.JWT_SECRET


const userRouter = Router();

const prismaClient = new PrismaClient();

interface CustomRequest extends Request{
    userId?:number
}

userRouter.post('/signup', async(req, res) => {
    
    try{
        const {publicKey,signature, message} = req.body;
        // verify the signature
        
        let signatureBytes;
        if (signature.type === 'Buffer') {
            signatureBytes = new Uint8Array(signature.data);
        } else {
            signatureBytes = new Uint8Array(Object.values(signature));
        }
        const result = nacl.sign.detached.verify(new Uint8Array(message), signatureBytes, new PublicKey(publicKey).toBytes());

        const worker = await prismaClient.worker.findUnique({where:{address:publicKey}})
        if(worker){
            return res.status(401).json({
                success:false,
                message:"Wallet linked to worker."
            })
        }

        // if exists then login else create
        const user = await prismaClient.user.upsert({
            where:{
                address:publicKey
            },
            create:{
                address:publicKey
            },
            update:{}
        })  
        const token = jwt.sign({userId: user.id},JWT_SECRET!);
        res.cookie('token',token ,{httpOnly:true});
        return res.status(200).json({sucess:true,token});
    } catch(e:any){
        return res.status(401).json({
            success:false,
            message:e.message
        })
    }
})


userRouter.post('/task',isUser,async (req:CustomRequest,res:Response)=>{
    const userId = req.userId;
    

    const userData = await prismaClient.user.findUnique({
        where:{
            id:userId
        }
    })
   
    const parseData = createTaskInput.safeParse(req.body);
    console.log(parseData.data?.signature);
    if(!parseData.success){
        return res.status(401).json({
            success:false,
            message:"Invalid Input",
            errors:parseData.error.errors
        })
    }

    // const uploadPromises = parseData.data?.options.map(file => {
    //     return cloudinary.uploader.upload(file.imageUrl, {
    //       folder: 'tasks'
    //     });
    // });

    // const results = await Promise.all(uploadPromises);
    // const imageUrls = results.map(result => result.secure_url);

    const transaction = await connection.getTransaction(parseData.data.signature,{
        maxSupportedTransactionVersion:1
    })
    if((transaction?.meta?.postBalances[1] ?? 0) - (transaction?.meta?.preBalances[1] ?? 0) != 10000000){
        return res.status(411).json({
            success:false,
            message:'Transaction signature/amount incorrect'
        })
    }
    if(transaction?.transaction.message.getAccountKeys().get(1)?.toString() !== PARENT_WALLET_ADDRESS){
        return res.status(411).json({
            success:false,
            message:"Paid to wrong address"
        })
    }
    if(transaction?.transaction.message.getAccountKeys().get(0)?.toString() !== userData?.id.toString()){
        return res.status(411).json({
            success:false,
            message:"Paid from wrong address"
        })
    }

    await prismaClient.$transaction(async tx=>{
        const response = await tx.task.create({
            data:{
                title:parseData.data.title || "Click the best thumbnail",
                signature:parseData.data.signature,
                amount:TOTAL_DECIMALS,
                userId:req.userId!
            }
        })
        await tx.option.createMany({
            data:parseData.data.options.map(option=>({
                image_url:option.imageUrl,
                taskId:response.id
            }))
        })
        return res.status(200).json({
            id:response.id,
        })
    
    })
   
   
})



userRouter.get('/tasks', isUser, async(req:CustomRequest,res:Response)=>{
    const taskId = req.body;
    const taskDetails = await prismaClient.task.findFirst({
        where:{
            userId:req.userId!,
            id:Number(taskId)
        }  
    })
    if(!taskDetails){
        return res.status(404).json({
            success:false,
            message:"Task not found"
        })
    }
    const responses = await prismaClient.submission.findMany({
        where:{
            taskId:Number(taskId)
        },
        include:{
            option:true
        }
    })
    console.log(responses)
    const result : Record<string,{
        count:number;
        option:{
            image_url:string;
        }
    }> = {};
    responses.forEach(r => {
        if(!result[r.option_id]){
            result[r.option_id] = {
                count:0,
                option:{image_url:r.option.image_url}
            }
        }
        else{
            result[r.option_id].count++;
        }
    });

    res.json({result})
})


userRouter.get('/balance',isUser, async(req:CustomRequest,res:Response)=>{
    const userId = req.userId;
    const user = await prismaClient.worker.findFirst({
        where:{
            id:userId
        }
    })
    return res.json({
        pending_amount:user?.pending_amount,
        locked_amount:user?.locked_amount
    })


})



export default userRouter;