"use client";
import React from 'react';
import ProjectPage from '../components/projectpage'; 

const Projects = () => {
  return (
    <div className='text-white min-h-screen'>
      <h1 className='lg:mt-36 text-4xl font-semibold'>Projects</h1>
      
      <ProjectPage
        link="/bohofashion"
        imgname="/boho_1.png" 
        github="https://github.com/kashishgadhiya/E-commerce_Website"
        weblink="https://boho-fashion-e-commerce.vercel.app/"
        details="Boho Fashion"
        desc="An e-commerce learning project showcasing user authentication, cart functionality, and admin product management. Built with the MERN stack, users can register, login, and seamlessly add items to their cart, while admins have control over product listings. Perfect for learning MongoDB, Express.js, React, and Node.js!"
        techs={["React js", "Node js", "Express js", "mongodb", "Tailwind css"]}
      />

   
  
      <ProjectPage
        link="/oldschooleatery"
        imgname="/old_1.png" 
        github="https://github.com/kashishgadhiya/Old-school-Eatery"
        weblink="https://old-school-eatery.vercel.app/"
        details="Old School Eatery"
        desc="The Old School Eatery Restaurant website, developed with Next.js and Tailwind CSS, offers a seamless user experience with detailed restaurant information, user authentication, and a dynamic menu display. Powered by NextAuth, it ensures secure authentication and robust API endpoints for managing restaurant data. Users can also log in using their Google accounts, adding convenience to the authentication process. The upcoming admin panel will provide comprehensive tools for menu and user management, enhancing the restaurant's online presence."
        techs={["NextJS", "NextAuth.js", "Tailwind Css", "bcrypt", "mongodb"]}
      />
         <ProjectPage
        link="/LuxuryProperties"
        imgname="/l_1.png" 
        github="https://github.com/kashishgadhiya/Luxury_Properties"
        weblink="https://luxury-properties.vercel.app/"
        details="Luxury Properties"
        desc="Luxury Properties is an advanced real estate platform for buying and renting high-end homes. Built with Next.js for optimal performance and Tailwind CSS for elegant, responsive design, the site features powerful search and sorting functionalities to enhance user experience. This project demonstrates proficiency in creating high-performance web applications and designing sleek, user-friendly interfaces."
        techs={["Next.js", "Tailwind CSS"]}
      />


      {/* <ProjectPage
        link="/emotionMusic"
        imgname="/Emotion.png" 
        github="https://github.com/kashishgadhiya/EMOTION_BASED-MUSIC-PLAYER"
        weblink="/emotionMusic"
        details="Emotion Based Music player"
        desc="This project leverages Python, OpenCV, and machine learning algorithms to create a music player that personalizes your music experience based on your emotional state. By detecting facial expressions and recognizing emotions, the system generates playlists that match your mood. This technology aims to enhance user engagement in fields like entertainment and mental health. Explore the repository to see how emotion recognition can revolutionize your music experience!"
        techs={["Python", "OpenCV", "Numpy", "glob", "random", "eel", "argparse", "tkinter"]}
      /> */}
    <ProjectPage
        link="/msufte"
        imgname="/msu_1.png" 
        github="https://github.com/kashishgadhiya/Msu-fte"
        weblink="https://msu-fte-baroda.netlify.app/"
        details="MSU Website"
        desc="The MSU Website, created to learn React, provides detailed information about the university, focusing mainly on the Faculty of Technology and Engineering. It features videos, program details, user reviews, and campus photos. Users can contact us through the Contact Us section, and inquiries are received via email, ensuring easy communication."
        techs={["Vanilla CSS", "React", "Vite", "React Icons"]}
      />

      <ProjectPage
        link="https://kashishgadhiya.vercel.app/"
        imgname="/portfolio_1.png" 
        github="https://github.com/kashishgadhiya/Portfolio"
        weblink="https://kashishgadhiya.vercel.app/"
        details="Portfolio"
        desc="This project is a showcase of my past work, made to highlight the technologies I love. I used Next.js and Tailwind CSS to build the frontend, creating a nice-looking design. This let me focus on making the portfolio look great and work smoothly, focusing on both how it looks and how well it works."
        techs={["Next Js", "Tailwind Css", "React", "react-type-animation"]}
      />
    </div>
  );
};

export default Projects;
