
import email from "../../../public/email.png";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../../../public/linkedin.png";
import Gitfooter from "./icons/Gitfooter";

export default function Footer() {
  return (
    <>
      <footer className="text-white mx-auto my-2 ">
        <hr />

        <div className="text-center mt-3">
          Developed by <strong>Kashish Gadhiya</strong>
        </div>
        <div className="flex gap-3 justify-center items-center my-2">
          <Link
            href={"https://github.com/kashishgadhiya"}
            className="hover:bg-zinc-600 rounded-full hover:p-0.5"
            target="_blank"
          >
            <Gitfooter />
          </Link>

          <Link
            href="mailto:kashishgadhiya3@gmail.com"
            className=" hover:bg-zinc-600 rounded-full hover:p-1"
          >
            {" "}
            <Image src={email} width={25} alt="mail"></Image>{" "}
          </Link>
          <Link
            href={"https://www.linkedin.com/in/kashishgadhiya/"}
            className=" hover:bg-zinc-600 rounded-full hover:p-2 "
            target="_blank"
          >
            <Image src={linkedin} height={20} alt="linkedin"></Image>
          </Link>
        </div>

        <div className="flex gap-2 justify-center items-center my-1 mx-auto ">
          <div className="flex flex-wrap gap-2">
            Created with <strong>NextJS</strong>
          </div>
          <hr className="footerhr"></hr>
          <div className="flex flex-wrap gap-2">
            Powered by <strong>Vercel</strong>
          </div>
        </div>
      </footer>
    </>
  );
}
