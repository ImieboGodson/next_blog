import React from "react";
import { PostCard } from "./PostCard";

export default function PostCardsLayout({ posts, cardType }) {
  return (
    <div className="w-full min-h-fit py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 grid-layout">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} cardType={cardType} />;
      })}
    </div>
  );
}
