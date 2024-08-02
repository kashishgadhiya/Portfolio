
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../../../public/linkedin.png";

export default function Contact() {
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
            ref={sectionRef}
            className={`text-white contact text-center my-48 mx-auto ${
                isVisible ? "slide-in-bottom" : ""
            }`}
            id="contact"
        >
            <h2 className="text-center justify-center items-center text-2xl">
                Want to get in touch?
            </h2>
            <div className="flex gap-1 justify-center items-center text-2xl mt-2 flex-wrap">
                <p>Write to me at </p>
                <div>
                    {" "}
                    <Link
                        href="mailto:kashishgadhiya3@gmail.com"
                        className="hover:underline"
                    >
                        {" "}
                        kashishgadhiya3@gmail.com
                    </Link>
                </div>
                <p>or </p>
                <Link
                    href={"https://www.linkedin.com/in/kashishgadhiya/"}
                    className="flex gap-1"
                    target="_blank"
                >
                    connect with me on
                    <Image
                        src={linkedin}
                        width={30}
                        className="hover:bg-blue-600"
                        alt="linkedin img"
                    />
                </Link>
            </div>
        </section>
    );
}
