import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";

export default function Navbar() {
  const { route } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`${
        menuOpen ? "fixed top-0 right-0 left-0 bg-white" : "relative"
      } max-w-[1200px] mx-auto px-4 md:px-11 py-8 flex items-center justify-between z-20`}
    >
      <Link href="/" className="min-w-fit">
        <div className="flex justify-center items-end">
          <Logo size={30} />
          <p className="text-xl font-bold">etalBox</p>
        </div>
      </Link>
      <span
        className="flex lg:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {!menuOpen ? <FiMenu size={25} /> : <RxCross2 size={25} />}
      </span>
      <div
        className={`fixed top-[70px] bottom-0 left-0 right-0 lg:flex lg:relative lg:top-0 lg:w-[100%] bg-white z-[100] ${
          menuOpen ? "flex" : "hidden"
        } justify-center lg:justify-end items-start lg:items-center p-10 lg:p-0`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[80%]">
          <ul className="flex flex-col lg:flex-row justify-center items-center">
            <li
              className="group mx-3 relative px-2 py-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
                <span className="w-[5%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
                <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
              </span>
              <Link
                href="/"
                className="text-xs font-medium text-[#7B8FA1] group-hover:text-[#2192FF]"
              >
                Services
              </Link>
            </li>
            <li
              className="group mx-3 mt-5 lg:mt-0 relative px-2 py-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
                <span className="w-[3%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
                <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
              </span>
              <Link
                href="/"
                className="text-xs font-medium text-[#7B8FA1] group-hover:text-[#2192FF]"
              >
                Creative Studio
              </Link>
            </li>
            <li
              className="group mx-3 mt-5 lg:mt-0 relative px-2 py-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`w-[100%] h-[3px] absolute bottom-0 ${
                  route.includes("/") ? "flex" : "hidden group-hover:flex"
                }`}
              >
                <span className="w-[7%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
                <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
              </span>
              <Link
                href="/"
                className={`text-xs font-medium ${
                  route.includes("/")
                    ? "text-[#2192FF]"
                    : "text-[#7B8FA1] group-hover:text-[#2192FF]"
                }`}
              >
                Blog
              </Link>
            </li>
            <li
              className="group mx-3 mt-5 lg:mt-0 relative px-2 py-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
                <span className="w-[4%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
                <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
              </span>
              <Link
                href="/"
                className="text-xs font-medium text-[#7B8FA1] group-hover:text-[#2192FF]"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row justify-between items-center">
            <li
              className="lg:mt-0 mt-7 lg:mx-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Link href="/">
                <FaBehance size={22} />
              </Link>
            </li>
            <li
              className="lg:mt-0 mt-7 lg:mx-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Link href="/">
                <FaDribbble size={22} />
              </Link>
            </li>
            <li
              className="mt-7 lg:mt-0 lg:ml-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Link href="/">
                <div className="flex items-center px-10 py-4 lg:px-7 lg:py-3 text-sm rounded-full bg-[#2192FF] text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]">
                  Contact Us
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
