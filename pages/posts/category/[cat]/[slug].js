import React from "react";

export default function Post({ post }) {
  return <div>{post}</div>;
}

export async function getStaticProps(context) {
  const { cat, slug } = context.params;
  const response = await fetch(
    `http://localhost:3000/api/posts/category/${cat}/${slug}`
  );
  const { post } = await response.json();

  return {
    props: {
      post,
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
        slug: post.realSlug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
