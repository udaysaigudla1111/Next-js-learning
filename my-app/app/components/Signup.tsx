"use client"

import React,{useState} from 'react'
import InputField from './InputField'
import axios from 'axios'
import { log } from 'console'

const Signup = async () => {
  await new Promise<void>((res,rej)=>{
    setTimeout(()=>{
      res();
    },5000)
  })
    let [username,setName] = useState("");
    let [password,setPassword] = useState("");
  return (
    <div className='h-screen bg-gray-100 flex justify-center items-center'>
        <div className='h-auto w-96 rounded-md bg-white flex flex-col p-6 gap-3'>
            <InputField label={"Username"} placeholder={"Enter Username"} value={username} onChange={(e:React.FormEvent<HTMLInputElement>)=>{setName(e.currentTarget.value)}} />
            <InputField label={"Password"} placeholder={"Enter the password"} value={password} onChange={(e:React.FormEvent<HTMLInputElement>)=>{setPassword(e.currentTarget.value)}}  />
            <button className='bg-blue-500 py-2 text-white font-bold rounded-md mt-4 hover:scale-[1.01] active:scale-[0.98] duration-75 transition-all' onClick={async ()=>{             
               try {
                  await axios.post("http://localhost:3000/api/user",{
                    username,
                    password
                 })
               } catch (error) {
                  console.log(error);                  
               }
             
            }} >Signup</button>
        </div>
    </div>
  )
}

export default Signup