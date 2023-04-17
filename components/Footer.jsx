import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaRss,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto mt-20 py-5 px-20 flex flex-col justify-between items-center border-t-[1px] border-black bg-[#F6F1E9]">
      <div className="my-12 w-full flex justify-between items-center">
        <div className="h-full flex flex-col justify-between items-start">
          <Logo size={58} />
          <p className="mt-2 text-lg">MetalBox Inc.</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="">
            <p className="text-[1.4rem] font-bold">Stay up to date.</p>
            <p className="mt-1 text-sm">
              The biggest stories of the day delivered to your inbox.
            </p>
            <form
              className="my-3 p-2 w-[24rem] flex justify-between items-center bg-[#F6F1E9] border-[1px] border-black"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full mr-3 outline-none text-sm placeholder:text-sm bg-transparent"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button
                className="px-8 py-2 text-sm font-bold bg-black text-white"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center text-sm">
          <p>&copy; MetalBox 2023. All Rights Reserved.</p>
        </div>
        <ul className="list-none flex justify-center items-center">
          <Link href="/">
            <li className="mx-2 p-2 text-sm">
              <FaTwitter size={22} />
            </li>
          </Link>
          <Link href="/about-us">
            <li className="mx-2 p-2 text-sm">
              <FaDiscord size={22} />
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="mx-2 p-2 text-sm">
              <FaLinkedinIn size={22} />
            </li>
          </Link>
          <Link href="/about-us">
            <li className="mx-2 p-2 text-sm">
              <FaTiktok size={22} />
            </li>
          </Link>
          <Link href="/about-us">
            <li className="mx-2 p-2 text-sm">
              <FaInstagram size={22} />
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="mx-2 p-2 text-sm">
              <FaPinterest size={22} />
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="mx-2 p-2 text-sm">
              <FaYoutube size={22} />
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="mx-2 p-2 text-sm">
              <FaRss size={22} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
