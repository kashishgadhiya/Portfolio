"use client";
import Image from "next/image";
import Link from "next/link";
import Github from "./icons/Github";
import mainImg from "../../../public/old_1.png";
import ProArrow from "./icons/ProArrow";
import msu_1 from "../../../public/msu_1.png";
import emotion from "../../../public/Emotion.png";
import Doc from "./icons/Doc";
import portfolio from "../../../public/portfolio_1.png"

export default function Project() {
  return (
    <>
      <section className="text-white mb-10 mt-32  mx-auto " id="project">
        <h2 className="font-semibold text-3xl text-center my-5 ">
          
          Featured Projects
        </h2>
        <div className="lg:flex  gap-7 my-5 grid ">
          <div className="max-w-xl ">
            <h3 className="text-2xl font-semibold my-2">Old School Eatery</h3>

            




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
              <Link
                href={"/oldschooleatery"}
                className="mt-2 hover:bg-zinc-600 rounded-full hover:p-0.5"
              >
                <Doc />
              </Link>
            </div>
          


      

            <p className="text-zinc-500">
              The Old School Eatery Restaurant website, developed with Next.js
              and Tailwind CSS, offers a seamless user experience with detailed
              restaurant information, user ,authentication, and a dynamic menu
              display. Powered by NextAuth, it ensures secure authentication and
              robust API endpoints for managing restaurant data. Users can also
              log in using their Google accounts, adding convenience to the
              authentication process. The upcoming admin panel will provide
              comprehensive tools for menu and user management, enhancing the
              restaurant's online presence.
            </p>
            <div className="text-white flex mt-3 gap-2 flex-wrap">
              <div className="bg-zinc-500 px-2 rounded-full">NextJS</div>
              <div className="bg-zinc-500 px-2 rounded-full">NextAuth.js</div>
              <div className="bg-zinc-500 px-2 rounded-full">Tailwind Css</div>
              <div className="bg-zinc-500 px-2 rounded-full">bcrypt</div>
              <div className="bg-zinc-500 px-2 rounded-full">mongodb</div>
            </div>
          </div>
          {/* image */}
          <div>
            <Link href={"/oldschooleatery"} className="hover:shadow-xl">
              <Image
                src={mainImg}
                width={900}
                height={900}
                alt="webimg"
                className="rounded-lg hover:w-full "
              ></Image>
            </Link>
          </div>
        </div>
        {/* --------------------project--2-------------------- */}
        <div className="lg:flex grid gap-7 mt-24 ">
          <div className="hidden lg:inline">
            <Link href={"/msufte"} className="hover:shadow-lg">
              <Image
                src={msu_1}
                width={2000}
                height={2000}
                alt="msu img"
                className="rounded-lg "
              ></Image>
            </Link>
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold my-2">Msu Website</h3>
            <div className="flex gap-3 item-center my-3">
              <Link
                href={"https://github.com/kashishgadhiya/Msu-fte"}
                className="hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
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
              <Link
                href={"/msufte"}
                className="mt-2 hover:bg-zinc-600 rounded-full hover:p-0.5"
              >
                <Doc />
              </Link>
            </div>

            <p className="text-zinc-500">
              The MSU Website, created to learn React, provides detailed
              information about the university, focusing mainly on the Faculty
              of Technology and Engineering. It features videos, program
              details, user reviews, and campus photos. Users can contact us
              through the Contact Us section, and inquiries are received via
              email, ensuring easy communication.
            </p>
            <div className="text-white flex mt-3 gap-2 flex-wrap">
              <div className="bg-zinc-500 px-2 rounded-full">Vanila Css</div>
              <div className="bg-zinc-500 px-2 rounded-full">React</div>
              <div className="bg-zinc-500 px-2 rounded-full">vite</div>
              <div className="bg-zinc-500 px-2 rounded-full">React icons</div>
            </div>
          </div>
<div>
          <Link href={"/msufte"} className="hover:shadow-lg lg:hidden">
              <Image
                src={msu_1}
                width={2000}
                height={2000}
                alt="msu img"
                className="rounded-lg "
              ></Image>
            </Link>
          </div>
        </div>

        {/* project--3 */}
        <div className="lg:flex grid  gap-7  mt-24">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold my-2">
              Emotion Based Music player
            </h3>
            <div className="flex gap-2 item-center my-3">
              <Link
                href={
                  "https://github.com/kashishgadhiya/EMOTION_BASED-MUSIC-PLAYER"
                }
                className="hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <Github />
              </Link>

              <Link
                href={"/emotionMusic"}
                className="mt-1.5 hover:bg-zinc-600 rounded-full hover:p-0.5"
              >
                <Doc />
              </Link>
            </div>

            <p className="text-zinc-500">
              This project leverages Python, OpenCV, and machine learning
              algorithms to create a music
              
              player that personalizes your music experience based on
              your emotional state. By detecting
            
              facial expressions and recognizing emotions, the system generates
              playlists that match your mood. This technology aims to enhance
              user engagement in fields like entertainment and mental health.
              Explore the repository to see how emotion recognition can
              revolutionize your music experience!
            </p>
            <div className="text-white flex mt-3 gap-2 flex-wrap">
              <div className="bg-zinc-500 px-2 rounded-full">Python</div>
              <div className="bg-zinc-500 px-2 rounded-full">Open Cv</div>
              <div className="bg-zinc-500 px-2 rounded-full">Numpy</div>
              <div className="bg-zinc-500 px-2 rounded-full">glob</div>
              <div className="bg-zinc-500 px-2 rounded-full">random</div>
              <div className="bg-zinc-500 px-2 rounded-full">eel</div>
              <div className="bg-zinc-500 px-2 rounded-full">argparse</div>
              <div className="bg-zinc-500 px-2 rounded-full">tkinter</div>
            </div>
          </div>
          {/* image */}
          <div>
            <Link href={"/emotionMusic"} className="hover:shadow-lg">
              <Image
                src={emotion}
                width={1500}
                height={1500}
                alt="projectimg"
                className="rounded-lg "
              ></Image>
            </Link>
          </div>
        </div>



        {/* project 4 */}
        <div className="lg:flex grid gap-7 mt-24 ">
          <div className="hidden lg:inline border-1 rounded-lg">
            <Link href={"/"} className="hover:shadow-lg">
              <Image
                src={portfolio}
                width={2000}
                height={2000}
                alt="portfolioimg"
                className="rounded-lg "
              ></Image>
            </Link>
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold my-2">Portfolio</h3>
            <div className="flex gap-3 item-center my-3">
              <Link
                href={""}
                className="hover:bg-zinc-600 rounded-full hover:p-0.5"
              >
                <Github />
              </Link>
              <Link
                href={""}
                className="mt-1 hover:bg-zinc-600 rounded-full hover:p-0.5"
                target="_blank"
              >
                <ProArrow />
              </Link>
           
            </div>

            <p className="text-zinc-500">
            This project is a showcase of my past work, made to highlight the technologies I love. I used Next.js and Tailwind CSS to build the frontend, creating a nice-looking design.  This let me focus on making the portfolio look great and work smoothly, focusing on both how it looks and how well it works.
            </p>
            <div className="text-white flex mt-3 gap-2 flex-wrap">
              <div className="bg-zinc-500 px-2 rounded-full">Next Js</div>
              <div className="bg-zinc-500 px-2 rounded-full">Tailwind Css</div>
              <div className="bg-zinc-500 px-2 rounded-full">React</div>
              <div className="bg-zinc-500 px-2 rounded-full">react-type-animation</div>
            </div>
          </div>
<div>
          <Link href={"/"} className="hover:shadow-lg lg:hidden border-1 rounded-lg">
              <Image
                src={portfolio}
                width={1000}
                height={1800}
                alt="portfolioimg"
                className="rounded-lg "
              ></Image>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
