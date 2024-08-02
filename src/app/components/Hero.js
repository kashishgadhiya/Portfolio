
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import img from "../../../public/heroimg.png";
import Download from "./icons/Download";

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add("slide-up");
    }
    if (imgRef.current) {
      imgRef.current.classList.add("scale-up");
    }
    if (pRef.current) {
      pRef.current.classList.add("slide-up");
    }
  }, []);

  return (
    <>
      <section className="text-white lg:flex grid justify-center items-center lg:my-10 my-2 main maintwo">
        <div className="w-full">
          <h1
            className="font-extrabold text-4xl lg:mx-0 lg:text-5xl text-center lg:hidden mx-4 slide-in-bottom"
            ref={textRef}
          >
            Hi, I&apos;m{" "}
            <span>
              <TypeAnimation
                sequence={["Kashish Gadhiya", 2000, "Web Developer", 2000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div className="lg:mt-28 mt-24 mb-14 mx-auto lg:hidden">
            <Image
              src={img}
              height={700}
              alt={"hero image"}
              className="lg:hidden my-3"
              ref={imgRef}
            />
          </div>

          <h1
            className="font-extrabold text-4xl lg:mx-0 lg:mt-28 lg:text-5xl hidden lg:inline p-3"
            ref={textRef}
          >
            Hi, I&apos;m{" "}
            <span>
              <TypeAnimation
                sequence={["Kashish Gadhiya", 2000, "Web Developer", 2000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p
            className="lg:my-3 text-xl text-zinc-500 p-3"
            ref={pRef}
          >
            A frontend developer passionate about crafting beautiful web
            experiences. Now diving into full-stack development to build
            comprehensive, robust web applications.
          </p>
        </div>

        <div
          className="lg:mt-28 mt-10 mx-auto"
          ref={imgRef}
        >
          <Image
            src={img}
            height={700}
            alt={"hero image"}
            className="hidden lg:inline"
          />
        </div>
      </section>
    </>
  );
}
