
import Link from "next/link";
import FormLog from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
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
    <div className=" rounded-lg items-center "> 
        <div className=" resize component p-6 px-10 bg-red-700 rounded-lg max-w-[600px] max-h-[600px]justify-center"> 
        < h1 className="  text-white  text-center  text-5xl font-bold "> Login </h1> 
        <br/>
    <FormLog/>
    <br/> 
    <h1 className="text-center font-bold">Dont have an account? Click <Link href="/GetStarted" className="text-blue-400  hover:text-blue-200">here.</Link></h1>
    <br/>
    <h1 className="text-center font-bold">Use Guest account to view gallery! Click <Link href="/gallery" className="text-blue-400  hover:text-blue-200">here.</Link></h1>
     </div>
        </div>
    </div> 
    </div>
    </div>
    

    
  )}