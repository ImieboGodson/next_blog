import Link from "next/link";
import React from "react";

export default function PostsCategoryNavbar({ page }) {
  return (
    <div className="my-10">
      <ul className="flex justify-center items-center">
        <Link href="/">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "home" ? "bg-black text-white" : ""
            }`}
          >
            All
          </li>
        </Link>
        <Link href="/posts/category/nft">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "nft" ? "bg-black text-white" : ""
            }`}
          >
            NFT
          </li>
        </Link>
        <Link href="/posts/category/technology">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "technology" ? "bg-black text-white" : ""
            }`}
          >
            Technology
          </li>
        </Link>
        <Link href="/posts/category/ai">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "ai" ? "bg-black text-white" : ""
            }`}
          >
            Artificial Intelligence
          </li>
        </Link>
        <Link href="/posts/category/crypto">
          <li
            className={`mx-3 py-2 px-6 text-sm rounded-[10px] ${
              page === "crypto" ? "bg-black text-white" : ""
            }`}
          >
            Crypto
          </li>
        </Link>
      </ul>
    </div>
  );
}
