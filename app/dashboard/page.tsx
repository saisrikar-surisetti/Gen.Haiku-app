import Link from "next/link"
import CREATE from "./create"
import CREATIONS from "./creations"
export default function DashboardPage(){


    
    return <div>
        <div className="bg-black w-screen h-screen text-center">
            <h1 className="text-white ">
                Welcome! This is your Dashboard!    
            </h1>
<div className=' flex w-screen h-screen overflow-x-auto justify-center'>
    <div className="min-h-[600px] bg-black p-10 rounded-lg items-ceter" >
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <div className=" rounded-lg items-center "> <div className=" resize component p-6 px    -10 bg-red-700 rounded-lg max-w-[600px] max-h-[600px]justify-center"> 
        <CREATE/>
        <br/>
    
    <br/> 
    <CREATIONS/>
     </div>
        </div>
    </div> 
    </div>
    </div>
    </div>
}