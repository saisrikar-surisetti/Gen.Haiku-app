
export default function Home() {
  return (
    
    <div className='m-4 grid items-center w-screen overflow-x-clip overflow-y-clip'>
      <div className="min-h-[600px]  bg-black p-10 rounded-3xl text-ceter" >
      <h1 className="  font-extrabold text-gray-500 text-5xl md:text-9xl"> Supercharge communication,</h1>
      <br/> 
      <br/> 
      <h1 className=" text-4xl md:text-7xl text-gray-500 "> Introducing...</h1>
      <br/> 
      <br/> 
      <br/> 
      <h1 className=" shadow-2xl rounded-3xl shadow-red-700 font-thin text-red-700  text-center text-7xl md:text-9xl "> Gen.Haiku </h1>
      </div> 
      <br/>


<div className='h-full w-screen flex-1 rounded-3xl p-10 mb10 bg-red-900 items-center'>
  <div>
    <h1 className="text-6xl text-black pb-10   ">How do I get started?</h1>
  </div>
  <ul className="steps text-white steps-vertical">
  <li className="step  step-neutral">First navigate to the menu on the top right! </li>
  <li className="step step-neutral">Signup to add your own haiku&apos;s or use the guest account to only view them!</li>
  <li className="step step-neutral">After signing in, you will be redirected to the dashboard</li>
  <li className="step step-neutral">Clicking &quot;Create Haiku&quot; will redirect you to a page where you can make your own!</li>
  <li className="step step-neutral">Clicking &quot;View Gallery&quot; will let you see everyones!</li>
  <li className="step step-error">Most importantly, when you post any, make sure they are good! Otherwise we will find you! 
    
    EX: You → 😨  ⁌ 🔫😂  ⃪ Us </li>
</ul>
</div>
    
   </div>


    
  );
}
