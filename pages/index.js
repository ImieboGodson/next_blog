import Head from "next/head";
import PostsLayout from "@/components/PostsLayout";
import { getAllPosts } from "@/lib/getPosts";
import PageLayout from "@/components/PageLayout";

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
        <PostsLayout posts={posts} />
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
