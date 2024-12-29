'use client'
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function FormLog(){
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const response = await signIn('credentials', {
            email: formData.get("email"),
            password: formData.get("password"),
                redirect: false, }
            );

            console.log({response})
            if(!response?.error){
                router.push('/dashboard')
                router.refresh();
            }
            else{   
                redirect('/GetStarted')
            }
        }
    

    return(

        <form onSubmit={handleSubmit} className="flex-row justify-center text-black text-center content-center ">
        <br/>
        <input name="email" type="email" className="flex-1 bg-white text-xl rounded-lg" placeholder="Email" />
        <br/>
        <br/>
        <input name="password" type="password" className="flex-1  bg-white text-xl font-serif rounded-lg" placeholder="Password"/>
        <br/>
        <br/>
        <button className="btn btn-outline font-bold text-black" type="submit">SIGN IN</button>
    </form>
    );
}