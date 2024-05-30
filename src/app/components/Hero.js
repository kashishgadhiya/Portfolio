"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import img from "../../../public/heroimg.png";
import Download from "./icons/Download";

export default function Hero() {
  return (
    <>
      <section className="text-white lg:flex grid  justify-center items-center lg:my-10 my-2 main maintwo ">
        <div className="w-full ">
          <h1 className="font-extrabold text-4xl  lg:mx-0  lg:text-5xl text-center lg:hidden  mx-4">
            Hi, I&apos;m{" "}
            <span>
              <TypeAnimation
                sequence={["kashish Gadhiya", 2000, "Web Developer", 2000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
      
            </span>
            <div className="lg:mt-28 mt-20 mb-14 mx-auto lg:hidden">
              <Image
                src={img}
                height={700}
                alt={"hero image"}
                className="lg:hidden my-3"
              ></Image>
            </div>
          </h1>
          <h1 className="font-extrabold text-4xl  lg:mx-0 :mt-28  lg:text-5xl  hidden lg:inline p-3">
            Hi, I&apos;m{" "}
            <span>
              <TypeAnimation
                sequence={["kashish Gadhiya", 2000, "Web Developer", 2000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className=" lg:my-3  text-xl text-zinc-500 p-3  ">
            {" "}
            A frontend developer passionate about crafting beautiful web
            experiences. Now diving into full-stack development to build
            comprehensive, robust web applications.
          </p>
          <div className="flex  my-12 gap-3 items-center justify-center  lg:my-2 lg:items-start lg:justify-start  lg:flex p-3 ">
            {/*  */}
            <Link
              href="kashish_resume.pdf"
              className="flex gap-2  py-2 px-3 bg-blue-600 hover:bg-blue-500  cursor-pointer"
             target="_blank"
            >
              Resume
              <Download />
            </Link>

            <Link
              href={"#project"}
              className="border py-2 px-3 bg-transparent 
                hover:text-lg cursor-pointer"
            >
              Featured Work
            </Link>

          
          </div>
        </div>
        {/* image */}
        <div className="lg:mt-28 mt-10 mx-auto">
          <Image
            src={img}
            height={700}
            alt={"hero image"}
            className="hidden lg:inline"
          ></Image>
        </div>
      </section>
    </>
  );
}
