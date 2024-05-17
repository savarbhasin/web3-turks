"use client"
import { setBalance } from "@/slices/workerSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Data {
    id:number;
    title:string;
    options:{
        image_url:string;
        id:number;
    }[]

}

export default function SubmitTask (){
    const [data,setData] = useState<Data>();
    const {token, user} = useSelector((state:any)=>state.auth);
    const {balance} = useSelector((state:any)=>state.worker);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    const fetchData = async()=>{
        const res = await axios.get('http://localhost:3001/v1/worker/nextTask',{headers:{Authorization:`Bearer ${token}`}})
        setData(res.data.taskDetails);
        setLoading(false);
    }

    useEffect(()=>{
        token!=null && user=='worker' && fetchData()
    },[token])

    const handleClick = async(optionId:number,taskId:number)=>{
        toast.loading("Submitting task!");
        const submittedRes  = await axios.post('http://localhost:3001/v1/worker/submission',{
            optionId,
            taskId
        },{headers:{Authorization:`Bearer ${token}`}})
        dispatch(setBalance(submittedRes.data.balance+balance));
        toast.dismiss();
        toast.success("Task submitted successfully!");
        fetchData();
    }

    return ( 
        <>
        { data &&
            <div className="flex flex-col gap-5 w-full justify-center items-center my-20">
                <h1 className="text-xl font-bold">{data.title}</h1>

                <div className="flex flex-row gap-2">
                    {data.options.map((option)=>{
                        return <img className="max-h-[200px] cursor-pointer max-w-[300px]" onClick={()=>handleClick(option.id,data.id)} key={option.id} src={option.image_url} alt="" />
                    })}
                </div>
            </div>
            
        }
        {
            !data && !loading &&
                <div className="flex flex-col w-full justify-center items-center my-40">
                    <p className="text-xl font-bold">No tasks available. Check back in some time.</p>
                </div> 
        }
        </>
    )


}