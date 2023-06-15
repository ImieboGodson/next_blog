import React from "react";
import Time from "../Time";
import Image from "next/image";
import Link from "next/link";

export default function Result({ result, setCloseSearch }) {
  const { tag, slug, image, title, date } = result;
  return (
    <Link
      href={`/category/${tag}/${slug}`}
      className="w-full"
      onClick={setCloseSearch}
    >
      <div className="w-full py-3 px-2 md:px-6 flex justify-start items-center cursor-pointer hover:bg-[#DBDFEA]">
        <div className="overflow-hidden rounded-md mr-2">
          <Image
            className="object-cover"
            width={70}
            height={70}
            alt="post cover image"
            src={image}
          />
        </div>
        <div className="">
          <p className="text-sm md:text-md font-semibold">{title}</p>{" "}
          <div className="flex justify-start items-center">
            <p className="mr-1 text-xs">{tag},</p>
            <Time dateString={date} />
          </div>
        </div>
      </div>
    </Link>
  );
}
