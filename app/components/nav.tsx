'use client'

import Link from "next/link";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai"


export default function Nav() { 
    const[mmenu,setMenu]= useState(false)
    
    const handleNav = () => {
        setMenu(!mmenu);
    }   
  return ( 
    <nav className=" w-full bg-black  h-20 shadow-xl ">
        <div className="flex justify-between items-center h-full w-full  px-5 2xl:px-16">
        <Link href={'/'}> 
        <h1 className=" px-3 shadow-stone-300   rounded-3xl font-thin text-red-700  text-center text-5xl md:text-9xl "> Gen.Haiku </h1>
        </Link>
            <div className="text-white">
                <ul className="hidden sm:flex">
                    <Link href={"/about"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700 text-xl">
                        About me
                    </li>
                    </Link>
                    <Link href={"/resume"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700  text-xl">
                        Resume
                    </li  >
                    </Link>
                    <Link href={"https://www.youtube.com/watch?v=xvFZjo5PgG0"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700  text-xl">
                            Blog
                    </li>
                    </Link>
                    <Link href={"/getstarted"}>
                    <li className="ml-10 text-red-700 uppercase font-bold  hover:text-red-800 shawdow shadow-sm shadow-red-700 rounded-3xl px-3 text-xl">
                            Get Started
                    </li>
                    </Link>
                </ul>
            </div>
            <div  onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        <div className={
            mmenu ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-opacity-100 bg-black p-10 ease-in duration-500" :
            "fixed left-[-100%] top-0 w-[65%] sm:hidden h-screen bg-opacity-100  bg-black  p-10 ease-in duration-100" 
        }>
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25}/>
                </div>  
              </div>
              <div className="flex-col py-4">
                <ul>
                <Link href="/resume">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> Resume

                </li>
                </Link>
                <Link href="/about">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> About me

                </li>
                </Link>
                <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> Blog

                </li>
                </Link>
                <Link href={"/getstarted"}>
                    <li onClick={() => setMenu(false) }
                    className="mr-6 ml-4 text-red-700 mt-5 uppercase font-bold  hover:text-red-800 shawdow shadow-sm shadow-red-700 rounded-3xl px-3 text-xl">
                            Get Started
                    </li>
                    </Link>
        
        
                </ul>

              </div>
              <div className="flex flex-row pt-10 justify-around items-center">
                <Link href="https://www.instagram.com/saii.ca?igsh=MXdpd2xhY2VrcTI3MQ%3D%3D&utm_source=qr"> <AiOutlineInstagram size={30} /> </Link>
                <Link href="https://github.com/saisrikar-surisetti"> <AiOutlineGithub size={30} /></Link>
                <Link href="https://www.linkedin.com/in/saisrikar-surisetti-8a182b27b/"> <AiOutlineLinkedin size={30} /> </Link>

              </div>
              <div className="pt-10">
              <h1 className="  rounded-3xl shadow-red-700 font-thin text-red-700  text-center text-4xl "> Gen.Haiku </h1>
            </div>

        </div>
    </nav>

  );
}
