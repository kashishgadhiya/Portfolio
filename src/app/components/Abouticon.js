import Image from "next/image"
export default function Abouticon({img}){
    return (
        <>
        <div className=" rounded-lg skill  flex items-center justify-center  w-16 py-2  h-25">
        <Image src={img} width={40} className="" loading="lazy" alt="img"></Image>

    </div>
        </>
    )
}