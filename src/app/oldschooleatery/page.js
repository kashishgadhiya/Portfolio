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
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import Github from "../components/icons/Github";
import ProArrow from "../components/icons/ProArrow";

import Link from "next/link";
export default function oldschooleatery() {
  return (
    <>
      <section className="mx-auto lg:mt-32 mt-10 text-white pageone mb-5 ">
        <h1 className="text-white font-semibold lg:text-5xl text-4xl">
          Old School Eatery
        </h1>
        <div className="flex gap-3 item-center my-3">
        <Link
                href={"https://github.com/kashishgadhiya/Old-school-Eatery"}
                className="hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <Github />
              </Link>
              <Link
                href={"https://old-school-eatery.vercel.app/"}
                
                className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <ProArrow />
              </Link>
        </div>
        <Image src={old_1} width={800} className="mx-auto my-10"></Image>
        <h2 className="font-semibold text-4xl ">Introduction</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Old School Eatery Restaurant website is a full-fledged web
          application designed to provide users with a seamless and engaging
          experience. This project leverages modern web technologies, ensuring a
          minimal, responsive, and performant user interface. Built with the
          latest tech stack, the website offers detailed information about the
          restaurant, user authentication, a dynamic menu display, and an admin
          panel for managing content.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Technologies Used</h2>
        <div className="mt-3">
          <div className="text-lg text-zinc-500 my-3">
            <p>- Next js</p>
            <p>- NextAuth.js</p>
            <p>- Tailwind css</p>
            <p>- bcrypt</p>
            <p>- mongodb</p>
            <p>- mongoose</p>
            <p>- mongodb adapter</p>
          </div>
        </div>

        {/* 2 */}
        <h2 className="font-semibold text-4xl mt-3 ">Technical Details</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Old School Eatery Restaurant website, built with Next.js and
          Tailwind CSS, offers a fast, responsive, and visually appealing user
          interface, including comprehensive restaurant details, user
          authentication, and a dynamic menu display. The backend, powered by
          NextAuth ensures secure user registration and login, with passwords
          stored securely in a salted format in MongoDB using Mongoose. Robust
          API endpoints enable efficient menu management and authorized access
          to specific features, enhancing the overall user experience.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Future Scope</h2>
        <div className=" text-xl  text-zinc-500 flex flex-col mt-3">
          The admin panel, currently under development, will offer comprehensive
          tools for managing the restaurant&apos;s online presence. It will
          enable the admin to add and delete menu items, manage user data, and
          track orders. Planned features include easy menu updates, user
          management, and order tracking to ensure smooth operations.
          Additionally, a feature allowing users to add items to their cart and
          place orders directly from the website is also planned.
        </div>

        {/* last */}
        <h2 className="text-3xl mt-2 font-semibold">Conclusion</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Old School Eatery Restaurant website aims to enhance the digital
          presence of the restaurant by providing a user-friendly interface and
          powerful management tools. With ongoing development on the admin
          panel, the project is set to deliver a comprehensive solution for both
          customers and restaurant staff.
        </p>

        {/* img */}
        <h2 className="text-3xl my-3 font-semibold">Screenshots</h2>

        <Image
          src={old_1}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_3}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_6}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_5}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_4}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_2}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_7}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_8}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_9}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={old_10}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
      </section>
    </>
  );
}
