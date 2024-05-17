"use client"
import Drop from "@/components/Drop";
import Navbar from "@/components/Navbar";
import { setUser } from "@/slices/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import SubmitTask from "@/components/TaskSubmit";

export default function Home() {
  //@ts-ignore
  const {user, token} = useSelector(state=>state.auth);  
  const dispatch = useDispatch();
 
  return (
    <main className="flex flex-col bg-slate-200 h-screen overflow-hidden text-black">
      
      {
        !user && 
            <div className="flex flex-row w-full h-screen justify-center items-center gap-10">
              <button className="border border-black text-2xl px-5 py-2 rounded-xl font-bold" onClick={()=>dispatch(setUser('user'))}>User</button>
              <button className="border border-black text-2xl px-5 py-2 rounded-xl font-bold" onClick={()=>dispatch(setUser('worker'))}>Worker</button>
            </div>
      }
      <div>
        {user && <Navbar/> }
      </div>
      
      <div>
        {user=='user' && <Drop/>}
      </div>
      <div>
        {user == 'worker' && <SubmitTask/>}
      </div>
      
      
    </main>
  );
}
