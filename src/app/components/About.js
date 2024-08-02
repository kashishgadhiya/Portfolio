

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import html from "../../../public/html.svg";
import css from "../../../public/css.svg";
import js from "../../../public/javascript.svg";
import react from "../../../public/react.svg";
import express from "../../../public/express.svg";
import git from "../../../public/git.svg";
import java from "../../../public/java.svg";
import mongodb from "../../../public/mongodb.png";
import netlify from "../../../public/netlify.svg";
import nextjs from "../../../public/nextjs.svg";
import sql from "../../../public/sql.svg";
import nodejs from "../../../public/nodejs.svg";
import php from "../../../public/php.svg";
import postman from "../../../public/postman.svg";
import python from "../../../public/python.svg";
import vercel from "../../../public/vercel.svg";
import vite from "../../../public/vite.svg";
import vsc from "../../../public/vsc.svg";
import pycharm from "../../../public/PyCharm.png";
import tailwind from "../../../public/tailwind.png";
import bootstrap from "../../../public/bootstrap.png";
import Abouticon from "./Abouticon";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger animation when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="flex text-white my-10 gap-5 justify-between items-center flex-wrap"
      id="about"
      ref={sectionRef}
    >
 
      <div className="grid lg:flex gap-5">
        <div className="w-full h-full md:block mt-10">
          <h2
            className={`font-semibold text-3xl text-center lg:text-start ${
              isVisible ? "slide-in-top" : ""
            }`}
          >
            About Me
          </h2>
          <div>
            <p
              className={`lg:mt-5 text-zinc-500 mt-3 text-lg ${
                isVisible ? "slide-in-bottom" : ""
              }`}
            >
              Hello! I&apos;m Kashish, a dedicated web developer with a passion for both frontend and backend technologies. I excel in frontend development with a strong command of JavaScript and the MERN stack, while also expanding my skills in backend development using Express.js, Node.js, and MongoDB. I love adopting and working with the latest web technologies. Currently, I am exploring the domain of AI/ML.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="w-full p-3 lg:p-0">
          <h2
            className={`font-semibold text-3xl lg:my-2 my-4 ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            Skills
          </h2>
          <h3 className={`border-b-3 text-lg font-semibold mb-2 ${
              isVisible ? "slide-in-right" : ""
            }`}>
            Languages
          </h3>
          <hr className="aboutHr" />
          <div className="flex flex-col">
            <div className={`flex gap-7 flex-wrap mt-2 ${
                isVisible ? "slide-in-right" : ""
              }`}>
              <Abouticon img={html} />
              <Abouticon img={css} />
              <Abouticon img={js} />
              <Abouticon img={python} />
              <Abouticon img={sql} />
              <Abouticon img={php} />
              <Abouticon img={java} />
              <div className="rounded-lg skill flex items-center justify-center w-14 py-3 h-50">
                <Image src={mongodb} height={82} className="" loading="lazy" alt="mongodb" />
              </div>
              <Abouticon img={nodejs} />
              <Abouticon img={git} />
            </div>
            <h3
              className={`border-b-3 text-lg font-semibold mt-5 border-b-1 mb-2 ${
                isVisible ? "slide-in-right" : ""
              }`}
            >
              Frameworks and Tools
            </h3>
            <hr className="aboutHr" />
            <div className={`flex gap-7 flex-wrap mt-2 ${
                isVisible ? "slide-in-right" : ""
              }`}>
              <Abouticon img={react} />
              <Abouticon img={vite} />
              <Abouticon img={express} />
              <Abouticon img={tailwind} />
              <Abouticon img={nextjs} />
              <Abouticon img={bootstrap} />
              <Abouticon img={netlify} />
              <Abouticon img={vsc} />
              <Abouticon img={pycharm} />
              <Abouticon img={postman} />
              <Abouticon img={vercel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
