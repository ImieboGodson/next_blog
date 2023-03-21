import PostCardsLayout from "@/components/PostCardsLayout";
import PostsLayout from "@/components/PostsLayout";
import Head from "next/head";
import React from "react";

export default function Category({ posts }) {
  return (
    <div>
      <Head>
        <title>Post Categories</title>
      </Head>
      <main className="w-full min-h-fit flex items-top justify-center text-stone-700">
        <PostsLayout>
          <PostCardsLayout posts={posts} />
        </PostsLayout>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const category = context.params.cat;
  const response = await fetch(
    `http://localhost:3000/api/posts/category/${category}`
  );
  const { posts } = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/posts");
  const { posts } = await response.json();
  const paths = posts.map((post) => {
    return {
      params: {
        cat: post.data.tag,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
