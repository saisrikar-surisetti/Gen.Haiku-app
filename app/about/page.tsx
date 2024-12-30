import Link from "next/link"
import Image from "next/image"
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai"
export default function ABOUTPAGE(){
    return(
        <div className="bg-black justify-center flex items-center mt-32">
             <div className="font-mono resize component text-white p-6 px-10 bg-zinc-900 rounded-3xl max-w-[600px] max-h-[1000px] pb-3 justify-center items-center "> 
        < h1 className="  text-red-700  font-mono text-center  text-5xl font-bold "> About Me </h1> 
        <br/>
        <div className="flex justify-center">
        <Image
      src="/photosai.jpg"
      width={150}
      height={100}
      alt="Picture of the author"
      className="flex rounded-full shadow-2xl shadow-red-700"
    />
        </div>
<br/>
    <h1 className="text-center font-bold"> Hi my name is Saisrikar Surisetti, but you can call me Sai.</h1>
    <br/>
    <h1 className="text-center text-sm "> I am currently an undergraduate student at the University of Waterloo planning on pursuing Pure Mathamatics and Statistics. Growning up, I played AAA hockey, played games professionally, and represented Canada for robotics but now in university I have found intrest in badminton and poker. If you are intrested in either, hit me up!  
    </h1>
    <h1> In the future, I hope to do research in any quantatative/analytical feild but currently I have an intrest in the fields of generative ai and computer vision. If you have simular intrests or want to chat, feel free to shoot me a message on Linkedin!  </h1>
    <div className="flex flex-row pt-10 gap-3">
                <Link href="https://www.instagram.com/saii.ca?igsh=MXdpd2xhY2VrcTI3MQ%3D%3D&utm_source=qr"> <AiOutlineInstagram size={30} /> </Link>
                <Link href="https://github.com/saisrikar-surisetti"> <AiOutlineGithub size={30} /></Link>
                <Link href="https://www.linkedin.com/in/saisrikar-surisetti-8a182b27b/"> <AiOutlineLinkedin size={30} /> </Link>

              </div>
     </div>
     
        </div>

    )
}