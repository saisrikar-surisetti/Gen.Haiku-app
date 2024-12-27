import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="bg-black w-screen h-screen">
<div className=' flex w-screen h-screen overflow-x-auto justify-center'>
    <div className="min-h-[600px] bg-black p-10 rounded-lg items-ceter" >
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <div className=" rounded-lg items-center "> <div className=" resize component p-6 px    -10 bg-red-700 rounded-lg max-w-[600px] max-h-[600px]justify-center"> 
        < h1 className="  text-white  text-center  text-5xl font-bold "> Login </h1> 
        <br/>
    <form className="flex-row justify-center text-black text-center content-center ">

        <input type="text" className="flex-1 bg-white text-xl rounded-lg" placeholder="Username"/>
        <br/>
        <br/>
        <input type="password" className="flex-1  bg-white text-xl font-serif rounded-lg" placeholder="Password"/>
        <br/>
        <br/>
        <button className="btn btn-outline font-bold text-black"type="submit">SIGN IN</button>
    </form>
    <br/>
    <h1 className="text-center font-bold">Use Guest account! Click <Link href="/home" className="text-blue-400">here.</Link></h1>
     </div>
        </div>
    </div> 
    </div>
    </div>
    

    
  )}