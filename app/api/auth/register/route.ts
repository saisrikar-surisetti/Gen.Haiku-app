
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request){

    try{
const {username, email, password} = await request.json();
//validaition here if want to add
console.log({username, email, password});


const hashedPassword = await hash(password, 10);        
const sql = neon(`${process.env.DATABASE_URL}`);
const response = await sql('INSERT INTO users2 (email, username, password) VALUES ($1, $2, $3)', [email, username, hashedPassword]);
console.log({response})
}  
    catch(e){
        console.log({e});

    }   
     return NextResponse.json({message : 'success'});
}
