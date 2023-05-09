import PostCardsLayout from "./PostCardsLayout";

export default function RelatedPosts({ relatedPosts }) {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col justify-between items-center">
      <h1 className="my-12 text-3xl font-extrabold">Related Articles</h1>
      <PostCardsLayout posts={relatedPosts} cardType="related-posts" />
    </div>
  );
}
