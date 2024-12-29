import Link from "next/link"
export default function CREATIONS(){
    return(
       <Link href={"/gallery"}>
        <button className="btn btn-outline font-bold text-black hover:bg-white text-xl">VEIW HAIKU'S</button>
        </Link> 
    )
}