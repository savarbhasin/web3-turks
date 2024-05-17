import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

export const getNextTask = async(userId:number)=>{
    const taskDetails = await prismaClient.task.findFirst({
        where:{
            submissions:{
                none:{
                    workerId:userId
                }
            },
            done:false
        },
        select:{
            id:true,
            title:true,
            options:true,
            amount:true
        }
        
    })
    if(taskDetails){
        return taskDetails;
    }
}