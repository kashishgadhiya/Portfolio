import "bootstrap/dist/css/bootstrap.min.css";
import msu_1 from "../../../public/msu_1.png";
import msu_2 from "../../../public/msu_2.png";
import msu_3 from "../../../public/msu_3.png";
import msu_4 from "../../../public/msu_4.png";
import msu_5 from "../../../public/msu_5.png";
import msu_6 from "../../../public/msu_6.png";
import msu_7 from "../../../public/msu_7.png";
import msu_8 from "../../../public/msu_8.png";

import Github from "../components/icons/Github";
import ProArrow from "../components/icons/ProArrow";
import Image from "next/image";
import Link from "next/link";

export default function msufte() {
  return (
    <>
      <section className="mx-auto lg:mt-32 mt-10 text-white pageone mb-5 ">
        <h1 className="text-white font-semibold lg:text-5xl text-4xl">
          Msu Website
        </h1>
        <div className="flex gap-3 item-center my-3">
          <Link
            href={"https://github.com/kashishgadhiya/Msu-fte"}
            className="hover:bg-zinc-600 rounded-full hover:p-0.5"
          >
            <Github />
          </Link>
          <Link
            href={"https://msu-fte-baroda.netlify.app/"}
            className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5"
            target="_blank"
          >
            <ProArrow />
          </Link>
        </div>
        <Image
          src={msu_1}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <h2 className="font-semibold text-4xl ">Introduction</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Faculty Connect website is a comprehensive web application
          designed to provide detailed information about the Faculty of
          Technology and Engineering. Developed using React and vanilla CSS,
          this project ensures a clean, responsive, and engaging user interface.
          The website offers a range of features, including faculty details,
          student reviews, and a contact form that allows users to send
          inquiries directly to the faculty&apos;s email.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Technologies Used</h2>
        <div className="mt-3">
          <div className="text-lg text-zinc-500 my-3">
            <p>- React js</p>
            <p>- vanilla css</p>
            <p>- Netlify (for deployment)</p>
            <p>- Vite</p>
          </div>
        </div>

        {/* 2 */}
        <h2 className="font-semibold text-4xl mt-3 ">Technical Details</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Faculty Connect website, built with React and vanilla CSS,
          delivers a fast, responsive, and visually appealing user experience.
          <br /> Key features include:
          <br />
          Faculty Information: Detailed information about the Faculty of
          Technology and Engineering.
          <br />
          Student Reviews: Honest and insightful reviews from students about the
          faculty.
          <br />
          Contact Form: A user-friendly form that allows students and users to
          send questions directly to the faculty&apos;s email.
          <br />
          The project avoids the use of CSS frameworks and component libraries,
          focusing instead on pure CSS to achieve a custom look and feel.
          EmailJS or a similar service is used to handle form submissions,
          ensuring that inquiries are efficiently sent to the appropriate email
          addresses.
        </p>

        <h2 className="font-semibold text-4xl mt-3">Future Scope</h2>
        <div className=" text-xl  text-zinc-500 flex flex-col mt-3">
          Future enhancements for the Faculty Connect website include
          implementing a secure login and registration system for students,
          developing a dedicated panel for managing student admissions, and
          adding features to notify students about the programs they are
          enrolled in and other relevant updates. These improvements aim to
          streamline administrative processes, enhance communication, and
          provide a more personalized and efficient user experience for both
          students and faculty members.
        </div>

        {/* last */}
        <h2 className="text-3xl mt-2 font-semibold">Conclusion</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Faculty Connect website aims to enhance the digital presence of
          the Faculty of Technology and Engineering by providing an informative
          and user-friendly platform. With future updates planned, the project
          is set to offer a comprehensive solution for students and faculty
          members, facilitating better communication and access to essential
          information.
        </p>

        {/* img */}
        <h2 className="text-3xl my-3 font-semibold">Screenshots</h2>

        <Image
          src={msu_1}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_2}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_3}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_4}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_8}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_5}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_6}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <Image
          src={msu_7}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
      </section>
    </>
  );
}
