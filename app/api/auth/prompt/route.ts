
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import { neon } from '@neondatabase/serverless';
import { getServerSession } from "next-auth";

export async function POST(request: Request){

    try{
const {title, line1, line2, line3, author} = await request.json();
//validaition here if want to add
console.log({title, line1, line2, line3, author});

const DATABASE_URL ='postgresql://neondb_owner:4EKaxhsMjn6O@ep-noisy-dew-a40jplai.us-east-1.aws.neon.tech/neondb?sslmode=require'
       
const sql = neon(`${process.env.DATABASE_URL}`);
const response = await sql('INSERT INTO tb1 (title, line1, line2, line3, author) VALUES ($1, $2, $3, $4, $5)', [title, line1, line2, line3, author]);
}  
    catch(e){
        console.log({e});

    }   
     return NextResponse.json({message : 'success'});
}
