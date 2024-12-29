'use client'
import { redirect } from "next/navigation";
import { FormEvent } from "react";


export default function Form(){
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const response = await fetch('/api/auth/register', {
            method: "POST",
            body: JSON.stringify({
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
            }), 
        });

        
        console.log({response})
        redirect('SignIn')

    }

    return(

        <form onSubmit={handleSubmit} className="flex-row justify-center text-black text-center content-center ">

        <input name="username" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="Username"/>
        <br/>
        <br/>
        <input name="email" type="email" className="flex-1 bg-white text-xl rounded-lg" placeholder="Email" />
        <br/>
        <br/>
        <input name="password" type="password" className="flex-1  bg-white text-xl font-serif rounded-lg" placeholder="Password"/>
        <br/>
        <br/>
        <button className="btn btn-outline font-bold text-black"type="submit">SIGN UP</button>
    </form>
    );
}