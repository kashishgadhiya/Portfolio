
import ProjectDetails from '../components/ProjectDetails';

const BohoFashionPage = () => {
  return (
    <ProjectDetails
      title="Boho Fashion E-commerce Website"
      mainimg="/boho_1.png" 
      intro="Welcome to our Boho Fashion E-commerce website, where we showcase the latest trends in fashion for women, men, and more. This project is designed as a learning experience, leveraging modern web technologies to deliver a seamless shopping experience."
      techs={[
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Multer",
        "Stripe"
      ]}
      technicalDetails="Our Boho Fashion E-commerce website is powered by a robust tech stack designed to provide a seamless shopping experience. Leveraging React for dynamic UIs and Vite for rapid development, our frontend ensures fast and responsive interactions. Node.js and Express handle our backend logic, with MongoDB offering scalable data storage. Multer manages efficient image uploads, while Tailwind CSS provides sleek, responsive designs. Features include secure user authentication, an intuitive shopping cart, and customizable t-shirt designs. With an admin panel for effortless product management and plans for future enhancements like advanced search and expanded customization options, we are committed to delivering a stylish and user-friendly shopping experience for all fashion enthusiasts."
      futureScope="In our future roadmap for the Boho Fashion E-commerce website, we plan to revamp the admin panel to include user and order management features, enhancing operational efficiency. Integrating a secure payment gateway will provide seamless transaction experiences for our customers, fostering trust and convenience. Expanding our product categories and offerings will cater to a broader audience, while implementing advanced search and filtering options will optimize user navigation and satisfaction. These improvements aim to solidify our platform as a premier destination for stylish and accessible bohemian fashion."
      conclusion="In conclusion, our Boho Fashion E-commerce website stands at the intersection of style and technology, offering a seamless shopping journey powered by React, Node.js, and MongoDB. With a commitment to continuous improvement through enhanced customization options, advanced search capabilities, and responsive design, we invite users to explore and contribute to a vibrant community focused on modern, bohemian fashion trends. Join us in shaping the future of online shopping with innovation and style at its core."
      screenshots={[
        "/boho_1.png",
        "/boho_2.png",
        "/boho_3.png",
        "/boho_4.png",
        "/boho_5.png",
        "/boho_6.png",
        "/boho_7.png",
        "/boho_8.png",
        "/boho_9.png",
        "/boho_10.png",
        "/boho_11.png",
        "/boho_12.png",
        "/boho_13.png"
      ]}
      githubLink="https://github.com/kashishgadhiya/Boho_Fashion-E-commerce-"
      liveLink="https://boho-fashion-e-commerce.vercel.app/"
    />
  );
};

export default BohoFashionPage;
