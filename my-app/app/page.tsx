import axios from 'axios'
import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getDetails = async ()=>{
  try {
     const response = await prisma.user.findFirst({})

  return {username:response?.username,email:response?.username};
  } catch (error) {
    console.log(error);
    
  }
 
}

const page = async () => {

  // await new Promise<void>((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve();
  //   },5000)
  // })
  const user = await getDetails();

  return (
    <div className=' h-screen flex justify-center items-center '>
      <div className='w-96 h-40 flex justify-center items-center border'>
        <div>
          <h1>Name {user?.username}</h1>
          <h1>Email {user?.email}</h1>
        </div>
      </div>
    </div>
  ) 
}

export default page