
import { NextResponse } from "next/server";

import { neon } from '@neondatabase/serverless';


export async function POST(request: Request){

    try{
const {title, line1, line2, line3, author} = await request.json();
//validaition here if want to add
console.log({title, line1, line2, line3, author});


       
const sql = neon(`${process.env.DATABASE_URL}`);
const response = await sql('INSERT INTO tb1 (title, line1, line2, line3, author) VALUES ($1, $2, $3, $4, $5)', [title, line1, line2, line3, author]);
console.log({response})
}  
    catch(e){
        console.log({e});

    }   
     return NextResponse.json({message : 'success'});
}
