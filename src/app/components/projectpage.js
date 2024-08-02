
"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Github from './icons/Github';
import ProArrow from './icons/ProArrow';
import Doc from './icons/Doc';

const ProjectPage = ({ link, imgname, github, weblink, details, desc, techs }) => {
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
        <div ref={sectionRef} className={`lg:flex grid gap-7 lg:mt-24 mt-12 ${isVisible ? 'slide-in-bottom' : ''}`}>
            <div className={`hidden lg:inline ${isVisible ? 'slide-in-left' : ''}`}>
                <Link href={link} className="hover:shadow-lg">
                    <Image
                        src={imgname}
                        width={2600}
                        height={1500}
                        alt="Project image"
                        className="rounded-lg"
                    />
                </Link>
            </div>

            <div className={`${isVisible ? 'slide-in-bottom' : ''}`}>
                <h3 className="text-2xl font-semibold my-2">{details}</h3>
                <div className="flex gap-3 item-center my-3">
                    <Link href={github} className="hover:bg-zinc-600 rounded-full hover:p-0.5" target="_blank">
                        <Github />
                    </Link>
                    <Link href={weblink} className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5" target="_blank">
                        <ProArrow />
                    </Link>
                    <Link href={link} className="mt-2 hover:bg-zinc-600 rounded-full hover:p-0.5">
                        <Doc />
                    </Link>
                </div>

                <p className="text-zinc-500">{desc}</p>
                <div className="text-white flex mt-3 gap-2 flex-wrap">
                    {techs.map((tech, index) => (
                        <div key={index} className="bg-zinc-500 px-2 rounded-full">{tech}</div>
                    ))}
                </div>
            </div>

            <div className={`lg:hidden my-6 ${isVisible ? 'slide-in-right' : ''}`}>
                <Link href={link} className="hover:shadow-lg">
                    <Image
                        src={imgname}
                        width={2000}
                        height={2000}
                        alt="Project image"
                        className="rounded-lg"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProjectPage;
