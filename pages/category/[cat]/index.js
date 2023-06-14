import PageLayout from "@/components/PageLayout";
import PostCardsLayout from "@/components/PostCardsLayout";
import PostsLayout from "@/components/PostsLayout";
import formatCategory from "@/lib/formatCategory";
import { getAllCategory, getPostsByCategory } from "@/lib/getPosts";
import { useStore } from "@/store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Category({ posts }) {
  const { query } = useRouter();
  const categoryText = formatCategory(query.cat);

  const { storePosts, setPosts } = useStore();

  return (
    <div>
      <Head>
        <title>{`Category: ${categoryText} | MetalBox`}</title>
      </Head>
      <PageLayout>
        <PostsLayout posts={posts} />
      </PageLayout>
    </div>
  );
}

export async function getStaticProps(context) {
  const category = context.params.cat;
  const posts = getPostsByCategory(category);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const categories = getAllCategory();
  const allCategoryPaths = categories.map((cat) => {
    return {
      params: {
        cat: cat.toString(),
      },
    };
  });

  return {
    paths: allCategoryPaths,
    fallback: false,
  };
}
