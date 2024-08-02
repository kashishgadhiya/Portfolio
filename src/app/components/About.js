
"use client";
import { useEffect, useRef, useState } from "react";
import Abouticon from "./Abouticon";
import Image from "next/image";

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
      { threshold: 0.1 }
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
              <Abouticon img="/html.svg" />
              <Abouticon img="/css.svg" />
              <Abouticon img="/javascript.svg" />
              <Abouticon img="/python.svg" />
              <Abouticon img="/sql.svg" />
              <Abouticon img="/php.svg" />
              <Abouticon img="/java.svg" />
            
              <div className="rounded-lg skill flex items-center justify-center w-14 py-3 h-50">
                <Image src={"/mongodb.png"} height={82} className="" loading="lazy" alt="mongodb" width={90} />
              </div>
              <Abouticon img="/nodejs.svg" />
              <Abouticon img="/git.svg" />
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
              <Abouticon img="/react.svg" />
              <Abouticon img="/vite.svg" />
              <Abouticon img="/express.svg" />
              <Abouticon img="/tailwind.png" />
              <Abouticon img="/nextjs.svg" />
              <Abouticon img="/bootstrap.png" />
              <Abouticon img="/netlify.svg" />
              <Abouticon img="/vsc.svg" />
              <Abouticon img="/pycharm.png" />
              <Abouticon img="/postman.svg" />
              <Abouticon img="/vercel.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
