import PostsLayout from "@/components/PostsLayout";
import Head from "next/head";
import React from "react";

export default function Category() {
  return (
    <div>
      <Head>
        <title>Post Categories</title>
      </Head>
      <PostsLayout>Category Page</PostsLayout>
    </div>
  );
}
