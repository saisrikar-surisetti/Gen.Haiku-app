
import { neon } from '@neondatabase/serverless';

export default async function A() { 
    
   
 
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql('SELECT * FROM tb1 ',  );
    const user = response  
    const arrayDataStuff = user.map(content =>
            
         <div key={content.title} className="  min-h-[100px] rounded-3xl bg-red-700 shadow-sm text-center m-4 flex-1"> 
    < h1 className=" pt-5 text-slate-300 font-mono text-center  text-4xl font-bold "> {content.title} </h1> 
    < h1 className="  text-slate-400   text-center  text-sm font-mono "> By: {content.author} </h1> 
    <br/>
    <div className="font-mono text-white">
    <ul>
            <li>{content.line1}</li>
            <li>{content.line2}</li>
            <li>{content.line3}</li>
        </ul>
    </div>
       
<br/> 

<br/>

    </div>




    
    ) 


    return(
       <div className= "grid-cols-1 grid m-6 gap-4 md:grid-cols-3  ">
        {arrayDataStuff}
           
        
       </div>
    )

}
