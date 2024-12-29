import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt";
import { neon } from '@neondatabase/serverless';

export default async function A() { 
    
    const s = "2"
    const DATABASE_URL ='postgresql://neondb_owner:4EKaxhsMjn6O@ep-noisy-dew-a40jplai.us-east-1.aws.neon.tech/neondb?sslmode=require'      
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql('SELECT * FROM tb1 WHERE author=($1)', [s] );
    const user = response  
    const arrayDataStuff = user.map(content =>
        <li key={content.title}>
            <ul>
                <li>title:{content.title}</li>
                <li>author:{content.author}</li>
                <li>{content.line1}</li>
                <li>{content.line2}</li>
                <li>{content.line3}</li>
            </ul>

        </li>
    ) 


    return(
       <div>
        <ul>
            {arrayDataStuff}
        </ul>
       </div>
    )

}
