import formatCategory from "@/lib/formatCategory";
import truncateText from "@/lib/truncateText";
import Image from "next/image";
import Link from "next/link";
import Time from "./Time";
import { HiArrowUpRight } from "react-icons/hi2";

export function PostCard({ post, cardType }) {
  const { data, realSlug } = post;

  return (
    <div
      className={`group w-full min-h-fit grid grid-cols-1 grid-rows-2 gap-4 ${
        cardType === "normal"
          ? "first:grid-cols-2 first:grid-rows-1 first:gap-0 first:col-span-full first:topPost"
          : ""
      }`}
    >
      <Link href={`/category/${data.tag}/${realSlug}`}>
        <div
          className={`relative w-full min-h-[270px] h-full rounded-[20px] overflow-hidden cursor-pointer ${
            cardType === "normal" ? "coverPicture" : ""
          }`}
        >
          <Image
            className="object-cover"
            fill
            alt="post cover image"
            src={data.coverImage}
          />
          <div className="hidden group-hover:flex absolute left-0 right-0 top-0 bottom-0 z-10 bg-[#0000006c]"></div>
          <span className="hidden absolute group-hover:flex justify-center items-center w-[70px] h-[70px] rounded-full left-[42%] top-[40%] z-[100] bg-[#2192FF] text-white">
            <HiArrowUpRight size={25} />
          </span>
        </div>
      </Link>
      <div className="w-full min-h-fit flex flex-col justify-between items-start p-4">
        <Link href={`/category/${data.tag}`}>
          <p
            className={`text-sm text-[#2192FF] {
            cardType === "normal" ? "category-text" : ""
          }`}
          >
            {formatCategory(data.tag)}
          </p>
        </Link>
        <Link href={`/category/${data.tag}/${realSlug}`}>
          <h1
            className={`w-[95%] mt-4 text-lg font-semibold hover:underline cursor-pointer text-[#2A2F4F] ${
              cardType === "normal" ? "post-title" : ""
            }`}
          >
            {data.title}
          </h1>
        </Link>
        <p
          className={`mt-4 text-sm text-[#7B8FA1] ${
            cardType === "normal" ? "exrcept-text" : ""
          }`}
        >
          {truncateText(130, data.excerpt)}
        </p>
        <div
          className={`mt-4 flex justify-start items-center ${
            cardType === "normal" ? "authorDetail" : ""
          }`}
        >
          <div
            className={`mr-4 w-[2.6rem] h-[2.6rem] relative rounded-full overflow-hidden ${
              cardType === "normal" ? "authorPhoto" : ""
            }`}
          >
            <Image
              className="object-cover"
              fill
              alt="Author Profile Picture"
              src={data.author.picture}
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p
              className={`text-sm font-semibold text-[#2A2F4F] ${
                cardType === "normal" ? "authorName" : ""
              }`}
            >
              {data.author.name}
            </p>
            <Time dateString={data.date} />
          </div>
        </div>
      </div>
    </div>
  );
}
