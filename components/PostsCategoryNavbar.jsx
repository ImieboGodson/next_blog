import Link from "next/link";
import React from "react";

export default function PostsCategoryNavbar({ page }) {
  return (
    <div className="my-10">
      <ul className="flex justify-center items-center">
        <Link href="/">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "home" ? "bg-[#2192FF] text-white" : ""
            }`}
          >
            All
          </li>
        </Link>
        <Link href="/category/nft">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "nft" ? "bg-[#2192FF] text-white" : ""
            }`}
          >
            NFT
          </li>
        </Link>
        <Link href="/category/technology">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "technology" ? "bg-[#2192FF] text-white" : ""
            }`}
          >
            Technology
          </li>
        </Link>
        <Link href="/category/ai">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "ai" ? "bg-[#2192FF] text-white" : ""
            }`}
          >
            Artificial Intelligence
          </li>
        </Link>
        <Link href="/category/crypto">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "crypto" ? "bg-[#2192FF] text-white" : ""
            }`}
          >
            Crypto
          </li>
        </Link>
      </ul>
    </div>
  );
}
