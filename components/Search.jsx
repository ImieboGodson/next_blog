import useSearch from "@/lib/useSearch";
import Image from "next/image";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Time from "./Time";
import Link from "next/link";

export default function Search({ page, posts, showSearch, handleShowSearch }) {
  const [searchText, setSearchText] = useState("");
  const searchResults = useSearch(posts, searchText);

  const handleSearchClose = () => {
    setSearchText("");
    handleShowSearch();
  };

  return (
    <>
      <div
        onClick={() => handleSearchClose()}
        className={`${
          showSearch ? "flex" : "hidden"
        } fixed overflow-hidden top-0 right-0 left-0 h-screen justify-center items-start bg-slate-900/95 z-30`}
      >
        <div
          className="mt-[20px] sm:mt-[80px] overflow-hidden flex flex-col justify-start items-start w-[90%] sm:w-[650px] lg:w-[50%] min-h-fit bg-white rounded-[6px] z-40 search-shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-[56px] px-2 flex justify-center items-center">
            <div className="w-[5%] p-2 mr-2">
              <RiSearch2Line size={20} />
            </div>

            <input
              className="w-[92%] h-full p-3 outline-none placeholder:text-sm text-sm"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              placeholder={`Search in ${page === "home" ? "all posts" : page}`}
            />
          </div>
          <div
            className={`${
              searchText.length === 0 ? "hidden" : "flex"
            } w-full min-h-fit flex flex-col items-center border-t`}
          >
            <Results searchResults={searchResults} />
          </div>
        </div>
      </div>
    </>
  );
}

function Results({ searchResults }) {
  if (!searchResults) return null;
  return (
    <>
      {searchResults.length === 0 ? (
        <div className="w-full py-3 px-2 md:px-6 flex justify-center items-center">
          <p className="text-sm md:text-md">
            {searchResults.length} Results Found.
          </p>
        </div>
      ) : (
        <div className="w-full max-h-[350px] overflow-y-scroll scroll-smooth">
          {searchResults.map((result, index) => {
            return (
              <Link
                key={index}
                href={`/category/${result.tag}/${result.slug}`}
                className="w-full"
              >
                <div className="w-full py-3 px-2 md:px-6 flex justify-start items-center cursor-pointer hover:bg-[#DBDFEA]">
                  <div className="overflow-hidden rounded-md mr-2">
                    <Image
                      className="object-cover"
                      width={70}
                      height={70}
                      alt="post cover image"
                      src={result.image}
                    />
                  </div>
                  <div className="">
                    <p className="text-sm md:text-md font-semibold">
                      {result.title}
                    </p>{" "}
                    <div className="flex justify-start items-center">
                      <p className="mr-1 text-xs">{result.tag},</p>
                      <Time dateString={result.date} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
