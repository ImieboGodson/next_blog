import useSearch from "@/lib/useSearch";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useStore } from "@/store/store";
import SearchResults from "./SearchResults";

export default function Search({ page, posts }) {
  const [searchText, setSearchText] = useState("");
  const searchResults = useSearch(posts, searchText);

  const { setCloseSearch, isOpen } = useStore();

  const handleSearchClose = () => {
    setSearchText("");
    setCloseSearch();
  };

  return (
    <>
      <div
        onClick={() => handleSearchClose()}
        className={`${
          isOpen ? "flex" : "hidden"
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
            <SearchResults searchResults={searchResults} />
          </div>
        </div>
      </div>
    </>
  );
}
