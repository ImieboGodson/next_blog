import React from "react";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchForm() {
  return (
    <div className="mt-[-28px] px-2 overflow-hidden flex justify-center items-center w-[80%] sm:w-[500px] h-[56px] bg-white rounded-[15px] z-10 search-shadow">
      <div className="w-[5%] p-2 mr-2">
        <RiSearch2Line size={20} />
      </div>

      <input
        className="w-[92%] h-full p-3 outline-none placeholder:text-sm text-sm"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
