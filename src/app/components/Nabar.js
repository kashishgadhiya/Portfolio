
"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo2.png";
import Navbars from "./icons/Navbars";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    
    if (headerRef.current) {
      headerRef.current.classList.add("header-animation");
    }
  }, []);

  return (
    <>
      {/* mobile navbar */}
      <div className="flex md:hidden justify-between items-center my-4 mx-1">
        <Link href={"/"}>
          <Image src={logo} alt="logo" height={50} className="md:w-10 m-2" />
        </Link>
        <button className="border p-2 m-2" onClick={() => setMobileNav((prev) => !prev)}>
          <Navbars />
        </button>
      </div>

      {mobileNav && (
        <div
          className="md:hidden p-4 bg-transparent rounded-lg mt-2 flex flex-col gap-3 font-semibold text-center text-white moblienav"
          onClick={() => setMobileNav(false)}
        >
          <Link href={"/"} className="hover:font-semibold">Home</Link>
          <Link href={"#about"} className="hover:font-semibold">About</Link>
          <Link href={"/Projects"} className="hover:font-semibold">Projects</Link>
          <Link href={"#contact"} className="hover:font-semibold">Contact</Link>
         
      )}

      <header
        className="z-10 fixed top-0 bg-transparent max-w-xl hidden md:block main"
        ref={headerRef}
      >
        <nav className="flex items-center text-white py-2 px-7 navbar rounded-full justify-between">
          <div className="font-extrabold text-3xl">
            <Link href={"/"}>
              <Image src={logo} width={70} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-6 text-xl font-medium text-white">
            <Link href={"/"} className="hover:font-semibold">Home</Link>
            <Link href={"#about"} className="hover:font-semibold">About</Link>
            <Link href={"/Projects"} className="hover:font-semibold">Projects</Link>
            <Link href={"#contact"} className="hover:font-semibold">Contact</Link>
           
          </div>
        </nav>
      </header>
    </>
  );
}
