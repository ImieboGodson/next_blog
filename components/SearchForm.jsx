import React from "react";

export default function SearchForm() {
  return (
    <div className="mt-[-28px] px-2 overflow-hidden flex justify-center items-center w-[500px] h-[56px] bg-white rounded-[15px] z-10 search-shadow">
      <div className="w-[5%] p-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <input
        className="w-[92%] h-full p-3 outline-none placeholder:text-sm text-sm"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
