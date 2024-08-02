


"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Abouticon({ img }) {
    const [isVisible, setIsVisible] = useState(false);
    const iconRef = useRef(null);

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

        if (iconRef.current) {
            observer.observe(iconRef.current);
        }

        return () => {
            if (iconRef.current) {
                observer.unobserve(iconRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={iconRef}
            className={`rounded-lg skill flex items-center justify-center w-16 py-2 h-25 ${
                isVisible ? "slide-in-bottom" : ""
            }`}
        >
            <Image 
                src={img} 
                width={40} 
                height={40}
                className="" 
                loading="lazy" 
                alt="icon" 
            />
        </div>
    );
}
