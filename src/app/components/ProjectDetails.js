
"use client";
import { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import Link from 'next/link';
import Github from "../components/icons/Github";
import ProArrow from "../components/icons/ProArrow";

const ProjectDetails = ({ 
  title, 
  intro, 
  techs, 
  technicalDetails, 
  futureScope, 
  conclusion, 
  screenshots, 
  githubLink, 
  liveLink,
  
}) => {
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
      className={`mx-auto lg:mt-32 mt-10 text-white pageone mb-5 ${isVisible ? 'slide-in-bottom' : ''}`}
    >
      <h1 className={`text-white font-semibold lg:text-5xl text-4xl ${isVisible ? 'slide-in-top' : ''}`}>
        {title}
      </h1>
      
      {githubLink && liveLink && (
        <div className={`flex gap-3 item-center my-3 ${isVisible ? 'slide-in-top' : ''}`}>
          <Link href={githubLink} className="hover:bg-zinc-600 rounded-full hover:p-0.5 z-50" target="_blank">
            <Github />
          </Link>
          <Link href={liveLink} className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5 z-50" target="_blank">
            <ProArrow />
          </Link>
        </div>
      )}
    
      <div className={`flex-1 max-w-2xl mx-auto mt-5 ${isVisible ? 'slide-in-top' : ''}`}>
        <AliceCarousel
          items={screenshots.map((src, index) => (
            <Image 
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`} 
              layout="responsive"
              width={500}
              height={800}
              className='object-cover w-full h-full'
            />
          ))}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
          className='rounded-xl'
        />
      </div>
      
      <h2 className={`font-semibold text-4xl mt-3 ${isVisible ? 'slide-in-top' : ''}`}>Introduction</h2>
      <p className={`text-lg text-zinc-500 my-3 ${isVisible ? 'slide-in-bottom' : ''}`}>{intro}</p>
      
      <div className='my-5'>
        <h2 className={`font-semibold text-4xl mt-3 ${isVisible ? 'slide-in-top' : ''}`}>Technologies Used</h2>
        <div className={`text-lg text-zinc-500 my-3 ${isVisible ? 'slide-in-bottom' : ''}`}>
          {techs.map((tech, index) => (
            <p key={index}>- {tech}</p>
          ))}
        </div>
      </div>
      
      <div className='my-5'>
        <h2 className={`font-semibold text-4xl mt-3 ${isVisible ? 'slide-in-top' : ''}`}>Technical Details</h2>
        <p className={`text-lg text-zinc-500 my-3 ${isVisible ? 'slide-in-bottom' : ''}`}>{technicalDetails}</p>
      </div>
      
      <div className='my-5'>
        <h2 className={`font-semibold text-4xl mt-3 ${isVisible ? 'slide-in-top' : ''}`}>Future Scope</h2>
        <div className={`text-xl text-zinc-500 flex flex-col mt-3 ${isVisible ? 'slide-in-bottom' : ''}`}>{futureScope}</div>
      </div>
      
      <div className='my-5'>
        <h2 className={`text-3xl mt-2 font-semibold ${isVisible ? 'slide-in-top' : ''}`}>Conclusion</h2>
        <p className={`text-lg text-zinc-500 my-3 ${isVisible ? 'slide-in-bottom' : ''}`}>{conclusion}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;