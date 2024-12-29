
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import { neon } from '@neondatabase/serverless';
import { getServerSession } from "next-auth";

export async function POST(request: Request){

    try{
const {username, email, password} = await request.json();
//validaition here if want to add
console.log({username, email, password});

const DATABASE_URL ='postgresql://neondb_owner:4EKaxhsMjn6O@ep-noisy-dew-a40jplai.us-east-1.aws.neon.tech/neondb?sslmode=require'
const hashedPassword = await hash(password, 10);        
const sql = neon(`${process.env.DATABASE_URL}`);
const response = await sql('INSERT INTO users2 (email, username, password) VALUES ($1, $2, $3)', [email, username, hashedPassword]);
}  
    catch(e){
        console.log({e});

    }   
     return NextResponse.json({message : 'success'});
}
