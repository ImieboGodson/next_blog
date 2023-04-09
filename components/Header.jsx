import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto px-11 py-8 flex items-center justify-between">
      <Logo size={48} />
      {/* <ul className="flex justify-center items-center">
        <Link href="/">
          <li className="mx-3 p-2 text-sm">Blog</li>
        </Link>
        <Link href="/about-us">
          <li className="mx-3 p-2 text-sm">About Us</li>
        </Link>
        <Link href="/contact-us">
          <li className="mx-3 p-2 text-sm">Contact Us</li>
        </Link>
      </ul> */}
      <Link href="/">
        <div className="flex items-center px-5 py-2 text-sm rounded bg-[#2F58CD] text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]">
          Contact Us
        </div>
      </Link>
    </div>
  );
}
