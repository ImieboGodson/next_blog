import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Header() {
  const { route } = useRouter();
  console.log(route);
  return (
    <div className="max-w-[1200px] mx-auto px-11 py-8 flex items-center justify-between">
      <div className="flex justify-center items-center">
        <Logo size={30} />
        <Link href="/">
          <p className="text-xl font-bold">etalBox</p>
        </Link>
      </div>
      <ul className="flex justify-center items-center">
        <li className="group mx-3 relative px-2 py-1">
          <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
            <span className="w-[5%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
            <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
          </span>
          <Link
            href="/"
            className="text-sm font-normal text-[#7B8FA1] group-hover:text-[#2192FF]"
          >
            Services
          </Link>
        </li>
        <li className="group mx-3 relative px-2 py-1">
          <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
            <span className="w-[3%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
            <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
          </span>
          <Link
            href="/"
            className="text-sm font-normal text-[#7B8FA1] group-hover:text-[#2192FF]"
          >
            Creative Studio
          </Link>
        </li>
        <li className="group mx-3 relative px-2 py-1">
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
            className={`text-sm font-normal ${
              route.includes("/")
                ? "text-[#2192FF]"
                : "text-[#7B8FA1] group-hover:text-[#2192FF]"
            }`}
          >
            Blog
          </Link>
        </li>
        <li className="group mx-3 relative px-2 py-1">
          <span className="hidden group-hover:flex w-[100%] h-[3px] absolute bottom-0">
            <span className="w-[4%] h-[3px] rounded-full mr-[2px] bg-[#2192FF]"></span>
            <span className="w-[30%] h-[3px] rounded-full bg-[#2192FF]"></span>
          </span>
          <Link
            href="/"
            className="text-sm font-normal text-[#7B8FA1] group-hover:text-[#2192FF]"
          >
            About us
          </Link>
        </li>
      </ul>
      <ul className="flex justify-between items-center">
        <li className="mx-2">
          <Link href="/">
            <FaBehance size={22} />
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/">
            <FaDribbble size={22} />
          </Link>
        </li>
        <li className="ml-2">
          <Link href="/">
            <div className="flex items-center px-7 py-3 text-sm rounded-full bg-[#2192FF] text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]">
              Contact Us
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
