import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PostsCategoryNavbar from "./PostsCategoryNavbar";
import SearchForm from "./SearchForm";

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
        <div className="w-full h-[170px] bg-black text-white rounded-[38px] flex justify-center items-center">
          <p className="tracking-wide text-4xl font-bold">Blog</p>
        </div>
        <SearchForm />
        <PostsCategoryNavbar page={page} />
      </div>
      {children}
    </div>
  );
}
