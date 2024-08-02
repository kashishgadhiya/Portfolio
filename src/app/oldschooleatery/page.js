


import old_1 from "../../../public/old_1.png";
import old_2 from "../../../public/old_2.png";
import old_3 from "../../../public/old_3.png";
import old_4 from "../../../public/old_4.png";
import old_5 from "../../../public/old_5.png";
import old_6 from "../../../public/old_6.png";
import old_7 from "../../../public/old_7.png";
import old_8 from "../../../public/old_8.png";
import old_9 from "../../../public/old_9.png";
import old_10 from "../../../public/old_10.png";

import ProjectDetails from "../components/ProjectDetails";


const OldSchoolEateryPage = () => {
  return (
    <ProjectDetails
      title="Old School Eatery"
      mainimg={old_1}
      intro="The Old School Eatery Restaurant website is a full-fledged web application designed to provide users with a seamless and engaging experience. This project leverages modern web technologies, ensuring a minimal, responsive, and performant user interface. Built with the latest tech stack, the website offers detailed information about the restaurant, user authentication, a dynamic menu display, and an admin panel for managing content."
      techs={["Next.js", "NextAuth.js", "Tailwind CSS", "bcrypt", "mongodb", "mongoose", "mongodb adapter"]}
      technicalDetails="The Old School Eatery Restaurant website, built with Next.js and Tailwind CSS, offers a fast, responsive, and visually appealing user interface, including comprehensive restaurant details, user authentication, and a dynamic menu display. The backend, powered by NextAuth ensures secure user registration and login, with passwords stored securely in a salted format in MongoDB using Mongoose. Robust API endpoints enable efficient menu management and authorized access to specific features, enhancing the overall user experience."
      futureScope="The admin panel, currently under development, will offer comprehensive tools for managing the restaurant's online presence. It will enable the admin to add and delete menu items, manage user data, and track orders. Planned features include easy menu updates, user management, and order tracking to ensure smooth operations. Additionally, a feature allowing users to add items to their cart and place orders directly from the website is also planned."
      conclusion="The Old School Eatery Restaurant website aims to enhance the digital presence of the restaurant by providing a user-friendly interface and powerful management tools. With ongoing development on the admin panel, the project is set to deliver a comprehensive solution for both customers and restaurant staff."
      screenshots={[old_1, old_2, old_3, old_4, old_5, old_6, old_7, old_8, old_9, old_10]}
      githubLink="https://github.com/kashishgadhiya/Old-school-Eatery"
      liveLink="https://old-school-eatery.vercel.app/"
    />
  );
};

export default OldSchoolEateryPage;
