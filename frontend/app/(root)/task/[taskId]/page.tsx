"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const BACKEND_URL = process.env.BACKEND_URL

export default function Task({params:{taskId}}:{params:{taskId:string}}){

    const [taskData,setTaskData] = useState<Record<string,{
        count:number;
        option:{
            image_url:string;
        }
    }>>();

    const fetchData = async()=>{
        const data = await axios.get(`http://localhost:3001/task/${taskId}`,);
        if(!data.data.success){
            toast.error('Failed to fetch task')
            return;
        }
        setTaskData(data.data.task);
    }

    useEffect(()=>{
        fetchData();
    
    },[])
    return (
        <div>
            <h1>Task {taskId}</h1>
            <div>
                {
                    taskData && 
                    Object.keys(taskData).map((key)=>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={taskData[key].option.image_url} alt=""/>
                            <p>{taskData[key].count}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}