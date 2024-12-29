'use client'
import Link from "next/link";
import { signOut } from "next-auth/react"

export default function Logout(){
    return(
        <div className="">
 <span className="ml-3 rounded-3xl hover:cursor-pointer  px-3  shadow-red-700 float-right sm:mr-16 relative text-white font-bold hover:text-red-700"
 onClick={() => {
            signOut();
        }}> Logout
        </span>
        <Link href={'/dashboard'}>
        <button className="ml-3 px-3 shadow-red-700 rounded-3xl hover:cursor-pointer float-right sm:mr-16 relative text-white font-bold  hover:text-red-700" >
            Dashboard
        </button>
        </Link>
        
        </div>

    )

}