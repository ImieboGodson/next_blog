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
    <div className="mt-20 border-t-[1.5px] border-[#DBDFEA] bg-[#Fff]">
      <div className="max-w-[1250px] mx-auto py-5 px-5 lg:px-20 flex flex-col justify-between items-center">
        <div className="my-12 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="h-full flex flex-col justify-between items-start">
            <Link href="/">
              <Logo size={58} />
            </Link>
            <p className="mt-2 text-lg">MetalBox Inc.</p>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col justify-between items-end">
            <div className="">
              <p className="text-[1.4rem] font-bold">Stay up to date.</p>
              <p className="mt-1 text-sm">
                The biggest stories of the day delivered to your inbox.
              </p>
              <form
                className="my-3 p-2 w-full md:w-[24rem] flex justify-between items-center  border-[1px] border-black"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="w-full mr-3 outline-none text-sm placeholder:text-sm bg-transparent"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button
                  className="px-4 md:px-8 py-2 text-sm font-bold bg-[#000000c9] hover:bg-black text-white"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="my-5 md:my-0 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mt-10 md:mt-0  order-1 md:order-0 flex justify-center items-center text-sm">
            <p>&copy; MetalBox 2023. All Rights Reserved.</p>
          </div>
          <ul className="order-0 md:order-1 list-none flex flex-wrap justify-start md:justify-center items-start md:items-center">
            <Link href="/">
              <li className="group mx-2 p-2 text-sm ">
                <FaTwitter size={22} className="group-hover:text-[#2192FF]" />
              </li>
            </Link>
            <Link href="/">
              <li className="group first-letter:mx-2 p-2 text-sm">
                <FaDiscord size={22} className="group-hover:text-[#3E54AC]" />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaLinkedinIn
                  size={22}
                  className="group-hover:text-[#2192FF]"
                />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaTiktok size={22} />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaInstagram size={22} className="group-hover:text-[#E384FF]" />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaPinterest size={22} className="group-hover:text-[#DF2E38]" />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaYoutube size={22} className="group-hover:text-[#ED2B2A]" />
              </li>
            </Link>
            <Link href="/">
              <li className="group mx-2 p-2 text-sm">
                <FaRss size={22} className="group-hover:text-[#F97B22]" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
