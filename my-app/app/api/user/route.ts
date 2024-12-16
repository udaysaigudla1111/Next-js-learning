import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import {z} from 'zod'
import { log } from 'console';
import { stringify } from 'querystring';


const prisma = new PrismaClient();

const GET = (Request:NextApiRequest)=>{
    return Response.json({
        username:"uday sai",
        email:"udaysai@gmail.com"
    })
    // return new Response("hiii")
}

const POST = async (req:NextRequest)=>{
    const body = await req.json();

    const requiredBody = z.object({
        username:z.string().min(4).max(20),
        password:z.string().min(4).max(25)
    })

    
    const parsedBody =  requiredBody.safeParse(body)

    if(!parsedBody.success)
    {
        return NextResponse.json({
            message:"Please enter the details correctly"
        })
    }
    try {

         const user = await prisma.user.create({
        data:{
            username:parsedBody.data.username,
            password:parsedBody.data.password
        }
    })

    console.log(user);
    
    return Response.json({
        message:"You are logged in!!!"
    })

    } catch (error:any) {
         console.log(typeof error); 
        //  console.log(JSON.stringify(error));
        //  console.log(error);         
        return NextResponse.json({
            message:"INTERNAL SERVER ERROR"
        })
    }
   
}

export {GET,POST}
 
