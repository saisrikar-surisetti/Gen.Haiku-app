'use client'
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { neon } from "@neondatabase/serverless";


export default function HAIKUS (){
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    const s = "ss"
    const DATABASE_URL ='postgresql://neondb_owner:4EKaxhsMjn6O@ep-noisy-dew-a40jplai.us-east-1.aws.neon.tech/neondb?sslmode=require'      
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql('SELECT * FROM tb1 WHERE author=($1)', [s] );
    const user = response  
    const arrayDataStuff = user.map(content =>
        <li key={content.title}>
            <div className=" rounded-lg items-center "> <div className=" resize component p-6 px    -10 bg-red-700 rounded-lg max-w-[600px] max-h-[600px]justify-center"> 
        < h1 className="  text-white  text-center  text-2xl font-bold "> {content.title} </h1> 
        < h1 className="  text-white  text-center  text-xl font-bold "> By: {content.author} </h1> 
        <br/>
            <ul>
                <li>{content.line1}</li>
                <li>{content.line2}</li>
                <li>{content.line3}</li>
            </ul>
    <br/> 

    <br/>

        </div>
        </div>
    


        </li>
        ) 
        return (
            <div className="bg-white">
                <ul className="text-gray-400 ">
            {arrayDataStuff}
        </ul> 
        </div>
    
        )
   

    }
}