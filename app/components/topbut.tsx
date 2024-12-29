import Image from "next/image";
 
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function TOPB() {

    const session = await getServerSession();
    return (
        
        <div>
            {!!session &&
            <Link href='/'>
            <h1>2</h1>
            </Link>
            }
            {!session &&
            <Link href='/SignIn'>
            <h1> SignIn</h1>
            </Link>
            }
        </div>
        

    )
}