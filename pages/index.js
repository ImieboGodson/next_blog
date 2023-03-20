import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PostsLayout from "@/components/PostsLayout";
import PostCardsLayout from "@/components/PostCardsLayout";
import { PostCard } from "@/components/PostCard";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  // useEffect(() => {
  //   console.log(posts);
  // }, []);

  return (
    <>
      <Head>
        <title>MetalBox</title>
        <meta name="description" content="A Blog Built with Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-fit flex items-top justify-center text-stone-700">
        <PostsLayout>
          <main className=" mt-8">
            <PostCardsLayout>
              {posts.map((post) => {
                return <PostCard key={posts[post]} post={post} />;
              })}
            </PostCardsLayout>
          </main>
        </PostsLayout>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/posts");
  const { message, posts } = await response.json();
  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
