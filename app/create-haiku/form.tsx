'use client'
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";

export default function FormLog(){
        

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const response = await fetch('/api/auth/prompt', {
            method: "POST",
            body: JSON.stringify({
                title: formData.get("title"),
                line1: formData.get("line1"),
                line2: formData.get("line2"),
                line3: formData.get("line3"),
                author: formData.get("author"),

            }), 
        });
        console.log({response})
        redirect('/gallery')
    }

    return(

        <form onSubmit={handleSubmit} className="flex-row justify-center text-black text-center content-center ">
        <br/>
        <input name="title" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="haiku title" />
        <br/>
        <br/>
        <input name="line1" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="First line..." />
        <br/>
        <br/>
        <input name="line2" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="Second line..." />
        <br/>
        <br/>
        <input name="line3" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="Third line..." />
        <br/>
        <br/>
        <input name="author" type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="haiku author" />
        <br/>
        <br/>
        <div className="mb-4">

        </div>

        <button  className="btn btn-outline font-bold text-black" type="submit">CREATE HAIKU</button>
    </form>
    );
}