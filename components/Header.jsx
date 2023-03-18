import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="p-4 flex item-center justify-between">
      <div>
        <p className=" tracking-tighter text-3xl font-extrabold">METALBOX</p>
      </div>
      <ul className="flex justify-center items-center">
        <Link href="/">
          <li className="mx-3 p-2 text-base">Blog</li>
        </Link>
        <Link href="/">
          <li className="mx-3 p-2 text-base">About Us</li>
        </Link>
        <Link href="/">
          <li className="mx-3 p-2 text-base">Contact Us</li>
        </Link>
      </ul>
      <Link
        href="/"
        className="px-5 py-2 rounded bg-black text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]"
      >
        Log In
      </Link>
    </div>
  );
}
