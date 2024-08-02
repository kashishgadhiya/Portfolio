"use client";
import Link from "next/link";

import ProjectPage from "../components/projectpage"; 



export default function Project() {
  return (
    <>
      <section className="text-white mb-10 mt-32 mx-auto" id="project">
        <h2 className="font-semibold text-3xl text-center my-5 slide-in-bottom">
          Featured Projects
        </h2>

        <div className=" gap-7 mt-6 my-5">
          <ProjectPage
            link="/bohofashion"
            imgname="/boho_1.png"
            github="https://github.com/kashishgadhiya/E-commerce_Website"
            weblink="/bohofashion"
            details="Boho Fashion"
            desc="An e-commerce learning project showcasing user authentication, cart functionality, and admin product management. Built with the MERN stack, users can register, login, and seamlessly add items to their cart, while admins have control over product listings. Perfect for learning MongoDB, Express.js, React, and Node.js!"
            techs={["React js", "Node js", "Express js", "mongodb", "Tailwind css"]}
          />

         
           <ProjectPage
      link="/LuxuryProperties"
      imgname="/l_1.png"
      width={1800} 
      height={1800} 
      github="https://github.com/kashishgadhiya/Luxury_Properties"
      weblink="https://luxury-properties.vercel.app/"
      details="Luxury Properties"
      desc="Luxury Properties is an advanced real estate platform for buying and renting high-end homes. Built with Next.js for optimal performance and Tailwind CSS for elegant, responsive design, the site features powerful search and sorting functionalities to enhance user experience. This project demonstrates proficiency in creating high-performance web applications and designing sleek, user-friendly interfaces."
      techs={["Next.js", "Tailwind CSS"]}
    />

        </div> 

        <div className="text-center my-5">
          <Link href="/Projects">
            <button className="mx-auto px-4 py-2 border rounded-lg text-center hover:bg-gray-600">Show more</button>
          </Link>
        </div>
      </section>
    </>
  );
}
