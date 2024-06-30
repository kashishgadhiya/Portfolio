
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"


import Github from "../components/icons/Github";
import ProArrow from "../components/icons/ProArrow";

import Link from "next/link";
import Imgss from "./Imgss";
export default function oldschooleatery() {
  return (
    <>
      <section className="mx-auto lg:mt-32 mt-10 text-white pageone mb-5 ">
        <h1 className="text-white font-semibold lg:text-5xl text-4xl">
          Boho Fashion
        </h1>
         {/* <div className="flex gap-3 item-center my-3">
        <Link
                href={"https://github.com/kashishgadhiya/Old-school-Eatery"}
                className="hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <a>

                <Github />
                </a>
              </Link>
              <Link
                href={"https://old-school-eatery.vercel.app/"}
                
                className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <ProArrow />
              </Link>
        </div>  */}
        <Image src='/e_1.png' width={800} height={800} className="mx-auto my-10"></Image>
        <h2 className="font-semibold text-4xl ">Introduction</h2>
        <p className="text-lg text-zinc-500 my-3">
        Welcome to our Boho Fashion E-commerce website, where style meets innovation. Dive into a world of vibrant fashion choices for women, men, and more, crafted with React and powered by Node.js and MongoDB. Explore seamless shopping, personalized customization options, and an intuitive admin panel for effortless management. Join us in redefining online shopping with our dynamic, responsive platform.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Technologies Used</h2>
        <div className="mt-3">
          <div className="text-lg text-zinc-500 my-3">
            <p>- React js</p>
            <p>- Node js</p>
            <p>- Tailwind css</p>
            <p>- Express js</p>
            <p>- mongodb</p>
           
          </div>
        </div>

        {/* 2 */}
        <h2 className="font-semibold text-4xl mt-3 ">Technical Details</h2>
        <p className="text-lg text-zinc-500 my-3">
       

Our Boho Fashion E-commerce website is powered by a robust tech stack designed to provide a seamless shopping experience. Leveraging React for dynamic UIs and Vite for rapid development, our frontend ensures fast and responsive interactions. Node.js and Express handle our backend logic, with MongoDB offering scalable data storage. Multer manages efficient image uploads, while Tailwind CSS provides sleek, responsive designs. Features include secure user authentication, an intuitive shopping cart, and customizable t-shirt designs. With an admin panel for effortless product management and plans for future enhancements like advanced search and expanded customization options, we&apos;re committed to delivering a stylish and user-friendly shopping experience for all fashion enthusiasts.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Future Scope</h2>
        <div className=" text-xl  text-zinc-500 flex flex-col mt-3">
        In our future roadmap for the Boho Fashion E-commerce website, we plan to revamp the admin panel to include user and order management features, enhancing operational efficiency. Integrating a secure payment gateway will provide seamless transaction experiences for our customers, fostering trust and convenience. Expanding our product categories and offerings will cater to a broader audience, while implementing advanced search and filtering options will optimize user navigation and satisfaction. These improvements aim to solidify our platform as a premier destination for stylish and accessible bohemian fashion.
        </div>

        {/* last */}
        <h2 className="text-3xl mt-2 font-semibold">Conclusion</h2>
        <p className="text-lg text-zinc-500 my-3">
        In conclusion, our Boho Fashion E-commerce website stands at the intersection of style and technology, offering a seamless shopping journey powered by React, Node.js, and MongoDB. With a commitment to continuous improvement through enhanced customization options, advanced search capabilities, and responsive design, we invite users to explore and contribute to a vibrant community focused on modern, bohemian fashion trends. Join us in shaping the future of online shopping with innovation and style at its core.
        </p>

        {/* img */}
        <h2 className="text-3xl my-3 font-semibold">Screenshots</h2>

       
        <Imgss img={"/e_1.png"}></Imgss>
        <Imgss img={"/e_3.png"}></Imgss>
        <Imgss img={"/e_2.png"}></Imgss>
        <Imgss img={"/e_4.png"}></Imgss>
        <Imgss img={"/e_5.png"}></Imgss>
        <Imgss img={"/e_6.png"}></Imgss>
        <Imgss img={"/e_7.png"}></Imgss>
        <Imgss img={"/e_8.png"}></Imgss>
        <Imgss img={"/e_9.png"}></Imgss>
        <Imgss img={"/e_10.png"}></Imgss>
        <Imgss img={"/e_11.png"}></Imgss>
        <Imgss img={"/e_14.png"}></Imgss>
        <Imgss img={"/e_12.png"}></Imgss>
        <Imgss img={"/e_13.png"}></Imgss>
      </section>
    </>
  );
}
