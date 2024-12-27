"use client"
import Image from "next/image";
import Logo from "/public/Logo2.png"
import Link from "next/link";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from "react-icons/ai"


export default function Nav() { 
    const[mmenu,setMenu]= useState(false)
    
    const handleNav = () => {
        setMenu(!mmenu);
    }   
  return ( 
    <nav className=" w-full bg-black  h-20 shadow-xl relative">
        <div className="flex justify-between items-center h-full w-full  px-5 2xl:px-16">
            <div>
                <Link href={"/"}>
                <Image 
                src={Logo}
                alt="Logo"
                width="165"
                height="55"
                className="cursor-pointer"
                />
                </Link>
            </div>
            <div className="text-white">
                <ul className="hidden sm:flex">
                    <Link href={"/about"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700 text-xl">
                        why us
                    </li>
                    </Link>
                    <Link href={"/about"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700  text-xl">
                        contacts
                    </li  >
                    </Link>
                    <Link href={"/about"}>
                    <li className="ml-10 uppercase font-bold hover:text-red-700  text-xl">
                            Blog
                    </li>
                    </Link>
                    <Link href={"/GetStarted"}>
                    <li className="ml-10 uppercase font-bold  hover:text-red-700 border p-0 border-b-4 border-red-800 text-xl">
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
            mmenu ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-zinc-900 p-10 ease-in duration-500" :
            "fixed left-[-100%] top-0 w-[65%] sm:hidden h-screen bg-zinc-900 p-10 ease-in duration-500" 
        }>
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25}/>
                </div>  
              </div>
              <div className="flex-col py-4">
                <ul>
                <Link href="/">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> Why us

                </li>
                </Link>
                <Link href="/">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> Contacts

                </li>
                </Link>
                <Link href="/">
                <li onClick={() => setMenu(false)}
                    className=" py-4 cursor-pointer"> Blog

                </li>
                </Link>
                <Link href={"/GetStarted"}>
                    <li onClick={() => setMenu(false) }
                    className="ml-10 uppercase font-bold  hover:text-red-700 border p-0 border-b-4 border-red-800 text-xl">
                            Get Started
                    </li>
                    </Link>
        
        
                </ul>

              </div>
              <div className="flex flex-row pt-10 justify-around items-center">
                <AiOutlineInstagram size={30} className="cursor-pointer"/>
                <AiOutlineGithub size={30} className="cursor-pointer"/>
                <AiOutlineMail size={30} className="cursor-pointer"/>

              </div>
              <div className="pt-10">
                <Link href={"/"}>
                <Image 
                src={Logo}
                alt="Logo"
                width="165"
                height="55"
                className="cursor-pointer"
                />
                </Link>
            </div>

        </div>
    </nav>

  );
}
