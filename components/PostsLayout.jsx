import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PostsCategoryNavbar from "./PostsCategoryNavbar";
import SearchForm from "./SearchForm";
import { FiCircle, FiTriangle } from "react-icons/fi";
import { GiCrown, GiVibratingSmartphone } from "react-icons/gi";
import { AiOutlineSave } from "react-icons/ai";

export default function PostsLayout({ children }) {
  const [page, setPage] = useState("home");
  const router = useRouter();
  useEffect(() => {
    if (router.query.cat) {
      setPage(router.query.cat);
    } else {
      setPage("home");
    }
  }, [router]);

  return (
    <div className="w-full mt-3 p-4 relative">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-[190px] relative bg-[#6F38C5] text-white md:rounded-[38px] flex justify-center items-center">
          <span className="absolute left-[20%] top-[25%] flex justify-center items-center text-[#2192FF]">
            <FiCircle className="text-[25px] sm:text-[35px]" />
          </span>
          <span className="absolute right-[20%] bottom-[25%] rotate-45 flex justify-center items-center text-[#F45050]">
            <FiTriangle className="text-[25px] sm:text-[35px]" />
          </span>
          <div className="relative pt-[12.5px]">
            <span className="absolute left-[0px] top-[0px] flex justify-center items-center text-[#F9D949]">
              <GiCrown size={25} />
            </span>
            <p className="tracking-wide text-4xl font-bold">Blog</p>
          </div>
        </div>
        <SearchForm />
        <PostsCategoryNavbar page={page} />
      </div>
      {children}
    </div>
  );
}
