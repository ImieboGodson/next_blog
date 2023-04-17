import formatCategory from "@/lib/formatCategory";
import truncateText from "@/lib/truncateText";
import Image from "next/image";
import Link from "next/link";
import Time from "./Time";

export function PostCard({ post, cardType }) {
  const { data, realSlug } = post;

  return (
    <div
      className={`w-full min-h-fit grid grid-cols-1 grid-rows-2 gap-4 ${
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
