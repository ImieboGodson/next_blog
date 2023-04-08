import Head from "next/head";
import { Inter } from "next/font/google";
import PostsLayout from "@/components/PostsLayout";
import PostCardsLayout from "@/components/PostCardsLayout";
import { getAllPosts } from "@/lib/getPosts";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>
          MetalBox | A Blog That Serves Statically Generated Markdown Contents
        </title>
        <meta name="description" content="A Blog Built with Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <main className="w-full min-h-fit flex items-top justify-center text-stone-700">
          <PostsLayout>
            <main className=" mt-8">
              {!posts ? (
                <p>No Posts Available at the Moment</p>
              ) : (
                <PostCardsLayout posts={posts} cardType="normal" />
              )}
            </main>
          </PostsLayout>
        </main>
      </PageLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
