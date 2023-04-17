import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FaBehance, FaDribbble } from "react-icons/fa";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto px-11 py-8 flex items-center justify-between">
      <Link href="/">
        <div className="flex justify-center items-center">
          <Logo size={30} />
          <p className="text-xl font-bold">MetalBox</p>
        </div>
      </Link>
      <ul className="flex justify-center items-center">
        <li>
          <Link href="/" className="mx-3 p-2 text-sm">
            Services
          </Link>
        </li>
        <li>
          <Link href="/" className="mx-3 p-2 text-sm">
            Creative Studio
          </Link>
        </li>
        <li>
          <Link href="/" className="mx-3 p-2 text-sm">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/" className="mx-3 p-2 text-sm">
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
