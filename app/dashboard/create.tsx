import Link from "next/link";
import { getServerSession } from "next-auth";
import { GET} from "../api/auth/[...nextauth]/route"

export default async function CREATE(){
    const session = await getServerSession(GET)
    console.log(GET)

    return(

       <Link href={'/create-haiku'}> 
       <button className="btn btn-outline font-bold text-black hover:bg-white text-xl">CREATE HAIKU</button>
       </Link> 
    )
}