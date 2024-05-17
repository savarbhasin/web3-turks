import { Router, Request, Response } from "express";
import { isWorker } from "../middleware/auth";
import jwt from 'jsonwebtoken';

import { PrismaClient } from "@prisma/client";
import { getNextTask } from "../db";
import { submissionInput } from "./types";
import nacl from "tweetnacl";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmRawTransaction } from "@solana/web3.js";
import { decode } from "punycode";
require('dotenv').config();


const workerRouter = Router();
const prismaClient = new PrismaClient();
const connection = new Connection('https://solana-devnet.g.alchemy.com/v2/oFWFCLUFOPgvg7Ac--JNtWABQ1jvjdUj');


export const TOTAL_DECIMALS = 1000_000_000;

const MAX_SUBMISSIONS = 100;

workerRouter.post('/signup', async(req, res) => {
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

        const user = await prismaClient.user.findUnique({where:{address:publicKey}})
        if(user){
            return res.status(401).json({
                success:false,
                message:"Wallet linked to user."
            })
        }

        // if exists then login else create
        const worker = await prismaClient.user.upsert({
            where:{
                address:publicKey
            },
            create:{
                address:publicKey
            },
            update:{}
        })  
        const token = jwt.sign({userId: worker.id},process.env.JWT_SECRET!);
        res.cookie('token',token ,{httpOnly:true});
        return res.status(200).json({sucess:true,token});
    } catch(e:any){
        return res.status(401).json({
            success:false,
            message:e.message
        })
    }
})

workerRouter.get('/balance',isWorker,async(req,res)=>{
    const userId = (req as Request & { userId: number }).userId;
    const workerData = await prismaClient.worker.findFirst({
        where:{
            id:userId
        }
    })
    if(!workerData){
        return res.status(401).json({message:'Invalid Worker'})
    }
    res.json({
        balance:workerData.pending_amount/TOTAL_DECIMALS
    })

})

workerRouter.get('/nextTask', isWorker, async (req, res) => {
    const userId = (req as Request & { userId: number }).userId;

    const taskDetails = await getNextTask(userId);
    if(!taskDetails){
        return res.json({message:"No Task Available"})
    }
    else{
        return res.json({taskDetails})
    }

});

workerRouter.post('/submission',isWorker,async(req:Request,res:Response)=>{
    const parsedData = submissionInput.safeParse(req.body);
    if(!parsedData.success){
        return res.status(401).json({message:'Invalid Input'})
    }
    const userId = (req as Request & { userId: number }).userId;
    const nextTask = await getNextTask(userId);
    if(!nextTask || nextTask.id!=parsedData.data.taskId){
        return res.status(401).json({message:'Invalid Task'})
    }
    const submission = await prismaClient.submission.create({
        data:{
            option_id:parsedData.data.optionId,
            taskId:parsedData.data.taskId,
            workerId:userId,
            amount: nextTask.amount/MAX_SUBMISSIONS,
            submissionDate:new Date()
        }
    })
    
    await prismaClient.worker.update({
        where:{
            id:userId
        },
        data:{
            pending_amount: {
                increment: submission.amount
            }
        }
    })
    const nextTaskNow = await getNextTask(userId);
    res.json({
        nextTask:nextTaskNow ?? "No tasks left",
        amount:submission.amount
    })
    
})

workerRouter.post('/payout',isWorker,async(req,res)=>{
    const userId = (req as Request & { userId: number }).userId;
    const workerData = await prismaClient.worker.findFirst({
        where:{
            id:userId
        }
    })
    if(!workerData){
        return res.status(401).json({message:'Invalid Worker'})
    }

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: new PublicKey(process.env.SOLANA_ADDRESS!),
            toPubkey: new PublicKey(workerData.address),
            lamports:1000_000_000* workerData.pending_amount/TOTAL_DECIMALS
        })
    )



    const txnId = transaction.signature?.toString();

    const keypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.SOLANA_SECRET!)));

    //@ts-ignore
    const signature = await sendAndConfirmRawTransaction(connection,transaction,[keypair]);



    // async add lock here


    await prismaClient.$transaction(async tx => {
        await tx.worker.update({
            where:{
                id:userId
            },
            data:{
                pending_amount:{
                    decrement: workerData.pending_amount
                },
                locked_amount:{
                    increment: workerData.pending_amount
                }
            }
        })
        await tx.payouts.create({
            data:{
                workerId:userId,
                amount:workerData.pending_amount,
                payoutDate:new Date(),
                status:"Processing",
                signature:txnId!
            }
        })
    })
    res.json({
        message:"Processing Payout",
        success:true,
        amount:workerData.pending_amount
    })
})

export default workerRouter;