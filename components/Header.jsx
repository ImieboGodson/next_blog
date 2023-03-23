import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="px-4 py-8 flex item-center justify-between">
      <Link href="/">
        <div>
          <p className="tracking-tighter text-3xl font-extrabold">METALBOX</p>
        </div>
      </Link>
      <ul className="flex justify-center items-center">
        <Link href="/">
          <li className="mx-3 p-2 text-sm">Blog</li>
        </Link>
        <Link href="/about-us">
          <li className="mx-3 p-2 text-sm">About Us</li>
        </Link>
        <Link href="/contact-us">
          <li className="mx-3 p-2 text-sm">Contact Us</li>
        </Link>
      </ul>
      <Link
        href="/"
        className="px-5 py-2 text-sm rounded bg-black text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]"
      >
        Log In
      </Link>
    </div>
  );
}
