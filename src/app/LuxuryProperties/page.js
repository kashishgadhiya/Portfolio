import Image from "next/image";
import ProjectDetails from "../components/ProjectDetails";

import l_1 from "../../../public/l_1.png";
import l_2 from "../../../public/l_2.png";
import l_3 from "../../../public/l_3.png";
import l_4 from "../../../public/l_4.png";
import l_5 from "../../../public/l_5.png";
import l_6 from "../../../public/l_6.png";
import l_7 from "../../../public/l_7.png";
import l_8 from "../../../public/l_8.png";
import l_9 from "../../../public/l_9.png";
import l_10 from "../../../public/l_10.png";

const LuxuryPropertiesPage = () => {
  return (
    <ProjectDetails
      title="Luxury Properties: Real Estate Website"
      mainimg={l_1}
      intro="Welcome to Luxury Properties, an advanced real estate platform designed to offer users an intuitive and sophisticated experience in buying and renting high-end homes. Our platform combines modern technology with elegant design to create a seamless experience for property seekers and real estate enthusiasts."
      features={[
        "Search Functionality: Easily find properties based on city, minimum and maximum price, and apply filters.",
        "Sorting Options: Sort properties by price from low to high or high to low.",
        "Modern UI: Built with Next.js for optimal performance and learning.",
        "Stylish Design: Utilizes Tailwind CSS for sleek and responsive styling."
      ]}
      techs={["Next.js", "Tailwind CSS"]}
      technicalDetails="Luxury Properties leverages Next.js to build a performant and scalable real estate platform, offering server-side rendering and static site generation. The application is styled using Tailwind CSS, a utility-first framework that allows for rapid, responsive, and customizable design. This setup ensures a smooth user experience and efficient performance."
      learningObjectives="Master Next.js for building high-performance web applications and gain hands-on experience with Tailwind CSS to create beautiful, responsive layouts."
      screenshots={[l_1, l_2, l_3, l_4, l_5, l_6, l_7, l_8, l_9, l_10]}
      githubLink="https://github.com/kashishgadhiya/Luxury_Properties"
      liveLink="https://luxury-properties.vercel.app/"
      futureScope="Future developments for Luxury Properties include integrating advanced features such as virtual tours, augmented reality property previews, and AI-driven property recommendations. These enhancements aim to provide users with a more immersive and personalized property search experience. Additionally, expanding the platform to include international property listings will further broaden its appeal and usability."
      conclusion="Luxury Properties stands as a significant advancement in the realm of real estate platforms. By combining the latest in web technology with a focus on user experience, we have created a platform that not only meets but exceeds the expectations of modern property seekers. Our commitment to continuous improvement and innovation ensures that Luxury Properties will remain at the forefront of the real estate industry."
    />
  );
};

export default LuxuryPropertiesPage;
