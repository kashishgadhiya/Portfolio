"use client";
import React from 'react';
import ProjectDetails from "../components/ProjectDetails";

const MsuWebsitePage = () => {
  return (
    <ProjectDetails
      title="Msu Website"
      mainimg="/msu_1.png" 
      intro="The Faculty Connect website is a comprehensive web application designed to provide detailed information about the Faculty of Technology and Engineering. Developed using React and vanilla CSS, this project ensures a clean, responsive, and engaging user interface. The website offers a range of features, including faculty details, student reviews, and a contact form that allows users to send inquiries directly to the faculty's email."
      techs={["React.js", "vanilla CSS", "Netlify (for deployment)", "Vite"]}
      technicalDetails="The Faculty Connect website, built with React and vanilla CSS, delivers a fast, responsive, and visually appealing user experience. Key features include: Faculty Information: Detailed information about the Faculty of Technology and Engineering. Student Reviews: Honest and insightful reviews from students about the faculty. Contact Form: A user-friendly form that allows students and users to send questions directly to the faculty's email. The project avoids the use of CSS frameworks and component libraries, focusing instead on pure CSS to achieve a custom look and feel. EmailJS or a similar service is used to handle form submissions, ensuring that inquiries are efficiently sent to the appropriate email addresses."
      futureScope="Future enhancements for the Faculty Connect website include implementing a secure login and registration system for students, developing a dedicated panel for managing student admissions, and adding features to notify students about the programs they are enrolled in and other relevant updates. These improvements aim to streamline administrative processes, enhance communication, and provide a more personalized and efficient user experience for both students and faculty members."
      conclusion="The Faculty Connect website aims to enhance the digital presence of the Faculty of Technology and Engineering by providing an informative and user-friendly platform. With future updates planned, the project is set to offer a comprehensive solution for students and faculty members, facilitating better communication and access to essential information."
      screenshots={[
        "/msu_1.png", 
        "/msu_2.png", 
        "/msu_3.png", 
        "/msu_4.png", 
        "/msu_5.png", 
        "/msu_6.png", 
        "/msu_7.png", 
        "/msu_8.png"
      ]} 
      githubLink="https://github.com/kashishgadhiya/Msu-fte"
      liveLink="https://msu-fte-baroda.netlify.app/"
    />
  );
};

export default MsuWebsitePage;
