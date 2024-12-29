

import Link from "next/link";   
import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function GetStart() {
 const session = await getServerSession();
    if (session){
        redirect('/')
    }
  return (
    <div className="bg-black w-screen h-screen">
<div className=' flex w-screen h-screen overflow-x-auto justify-center'>
    <div className="min-h-[600px] bg-black p-10 rounded-lg items-ceter" >
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <div className=" rounded-lg items-center "> <div className=" resize component p-6 bg-red-700 rounded-lg max-w-[600px] max-h-[600px]justify-center"> 
        < h1 className="  text-white  text-center  text-5xl font-bold "> Create an account </h1> 
        <br/>
        <Form/>
    <br/>
    <h1 className="text-center font-bold">Already have an account? Click <Link href="/signin" className="text-blue-400  hover:text-blue-200">here.</Link></h1>
    <br/>
    <h1 className="text-center font-bold">Use Guest account! click <Link href="/gallery" className="text-blue-400  hover:text-blue-200">here.</Link></h1>
     </div>
        </div>
    </div> 
    </div>
    </div>
    

    
  )}