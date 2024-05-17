import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
require('dotenv').config();

interface CustomRequest extends Request {
  userId?: number;
}


export function isUser(req:CustomRequest,res:Response,next:NextFunction){
    const token = req.cookies?.token ??  req.headers.authorization?.split(' ')[1];
    
    try{
        const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as JwtPayload;
        if(decoded.userId){
            req.userId = decoded.userId;
            return next();
        } else{
            return res.status(403).json({message:'Unauthorized'}); 
        }
    } catch(e){
        return res.status(403).json({message:'Unauthorized'});
    }
}

export function isWorker(req:CustomRequest,res:Response, next:NextFunction){
    const token = req.cookies?.token ?? req.headers.authorization?.split(' ')[1];
    try{
        const decoded = jwt.verify(token!, process.env.JWT_SECRET_WORKER!) as JwtPayload;
        if(decoded.userId){
            req.userId = decoded.userId;
            return next();
        } else{
            return res.status(403).json({message:'Unauthorized'}); 
        }
    } catch(e){
        return res.status(403).json({message:'Unauthorized'}); 
    }
}