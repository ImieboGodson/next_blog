import PostCardsLayout from "@/components/PostCardsLayout";
import PostsLayout from "@/components/PostsLayout";
import { fetchPosts, fetchPostsByCategory } from "@/lib/fetchPosts";
import formatCategory from "@/lib/formatCategory";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Category({ posts }) {
  const { query } = useRouter();
  const categoryText = formatCategory(query.cat);
  return (
    <div>
      <Head>
        <title>{`Category: ${categoryText} | MetalBox`}</title>
      </Head>
      <main className="w-full min-h-fit flex items-top justify-center text-stone-700">
        <PostsLayout>
          {!posts ? (
            <p>No Posts Available at the Moment</p>
          ) : (
            <PostCardsLayout posts={posts} cardType="normal" />
          )}
        </PostsLayout>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const category = context.params.cat;
  const posts = await fetchPostsByCategory(category);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  // console.log(posts);
  // const categories = ["nft", "ai", "crypto", "technology"];
  const allPaths = posts.map((post) => {
    return {
      params: {
        cat: post.data.tag.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
