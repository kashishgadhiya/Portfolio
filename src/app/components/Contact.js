import Link from "next/link"
import Image from "next/image"
import linkedin from "../../../public/linkedin.png"
export default function Contact(){
    return(
        <>
        <section className="text-white contact text-center my-48 mx-auto" id="contact">

      
       
<h2 className="text-center justify-center items-center  text-2xl ">want to get in touch ?</h2>
<div className="flex gap-1 justify-center items-center  text-2xl mt-2 flex-wrap ">
<p>Write to me at </p>
<div> <Link href="mailto:kashishgadhiya3@gmail.com" className="hover:underline">  kashishgadhiya3@gmail.com</Link></div>
<p>or </p>
<Link href={"https://www.linkedin.com/in/kashishgadhiya/"} className="flex gap-1 " target="_blank" >
connect with me on 
<Image src={linkedin} width={30} className="hover:bg-blue-600" alt="linkedin img"></Image>


</Link>

</div>
        </section>
        </>
    )
}