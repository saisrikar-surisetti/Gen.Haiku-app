import Image from "next/image";
import page from "/public/Home.png"

export default function Home() {
  return (
    
    <div className='m-4 grid flex w-full h-screen overflow-x-auto'>
      <div className="min-h-[600px] bg-black p-10 rounded-lg text-ceter" >
      <h1 className="font-bold text-gray-500 text-9xl"> Supercharge communication,</h1>
      <br/> 
      <br/> 
      <h1 className=" text-7xl text-gray-500 "> Introducing...</h1>
      <br/> 
      <br/> 
      <br/> 
      <h1 className=" font-thin text-red-700  text-center  text-9xl "> Gen.Haiku </h1>
      </div> 
      <br/>


<div className='min-h-[500px] flex-1 rounded-lg p-10 bg-red-900 items-center'>
  <div>
    <h1 className="text-6xl text-white pb-10   ">How do I get started?</h1>
  </div>
  <div className="grid flex grid-cols-5 gap-6 rounded-lg  ">
    <div className="flex-1 min-h-[300px] bg-black rounded-lg ">
<div className="text-center">
  <h1 className="text-white text-xl pt-8">
    Sign In or Sign Up!
  </h1>

</div>
    </div>
    <div className="flex-1 min-h-[100px] bg-black rounded-lg">

    </div>
    <div className="flex-1 min-h-[100px] bg-black rounded-lg">

    </div>
    <div className="flex-1 min-h-[100px] bg-black rounded-lg">
      
    </div>
    <div className="flex-1 min-h-[100px] bg-black rounded-lg">

    </div>

  </div>
</div>
    
   </div>


    
  );
}
