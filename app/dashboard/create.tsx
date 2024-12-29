import Link from "next/link";
import { GET} from "../api/auth/[...nextauth]/route"

export default async function CREATE(){
  
    console.log(GET)

    return(

       <Link href={'/create-haiku'}> 
       <button className="btn btn-outline font-bold text-black hover:bg-white text-xl">CREATE HAIKU</button>
       </Link> 
    )
}