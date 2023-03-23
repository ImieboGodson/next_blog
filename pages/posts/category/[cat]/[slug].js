import { PostCard } from "@/components/PostCard";
import PostCardsLayout from "@/components/PostCardsLayout";
import Time from "@/components/Time";
import formatCategory from "@/lib/formatCategory";
import { markdownToHtml } from "@/lib/markdownToHtml";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post({ post, fitleredRelatedPosts }) {
  const { data, content, realSlug } = post;
  return (
    <article>
      <Head>
        <title>{post.data.title}</title>
        <meta property="og:image" content={post.data.ogImage.url} />
      </Head>
      <main className="">
        <div className="relative flex justify-center items-start p-10 bg-black text-white">
          <div className="w-[75%] h-[250px] py-6 flex justify-between items-start">
            <div className="">
              <Link href={`/posts/category/${data.tag}/`}>
                <p className="text-base font-medium">
                  {formatCategory(data.tag)}
                </p>
              </Link>
              <h1 className="mt-6 w-[80%] text-4xl font-extrabold">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="flex justify-center items-end">
                <Link href="/">
                  <div className="relative mx-[4px] w-[58px] h-[58px] rounded-full flex justify-center items-center bg-white overflow-hidden">
                    <Image
                      src="/assets/icons/linkedin-in.svg"
                      width={23}
                      height={23}
                      alt="social link"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div className="relative mx-[4px] w-[58px] h-[58px] rounded-full flex justify-center items-center bg-white overflow-hidden">
                    <Image
                      src="/assets/icons/instagram.svg"
                      width={23}
                      height={23}
                      alt="social link"
                    />
                  </div>
                </Link>
                <Link href="/">
                  <div className="relative ml-[4px] w-[58px] h-[58px] rounded-full flex justify-center items-center bg-white overflow-hidden">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={23}
                      height={23}
                      alt="social link"
                    />
                  </div>
                </Link>
              </div>
              <div className="mt-6 flex justify-start items-center">
                <div className="mr-4 w-[2.6rem] h-[2.6rem] relative rounded-full overflow-hidden authorPhoto">
                  <Image
                    className="object-cover"
                    fill
                    alt="Author Profile Picture"
                    src={data.author.picture}
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-sm font-semibold authorName">
                    {data.author.name}
                  </p>
                  <Time dateString={data.date} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[70%] flex flex-col items-center">
          <div className="relative mt-[-100px] w-full h-[500px] rounded-[35px] overflow-hidden">
            <Image
              className="object-cover"
              src={data.coverImage}
              fill
              alt="Post Cover Image"
            />
          </div>
          <div
            className="w-[90%] my-10 mx-auto postbody"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="w-full flex flex-col justify-between items-center">
          <h1 className="my-12 text-3xl font-extrabold">Related Articles</h1>
          <PostCardsLayout
            posts={fitleredRelatedPosts}
            cardType="related-posts"
          />
        </div>
      </main>
    </article>
  );
}

export async function getStaticProps(context) {
  const { cat, slug } = context.params;
  const response = await fetch(
    `http://localhost:3000/api/posts/category/${cat}/${slug}`
  );
  const { post, relatedPosts } = await response.json();
  const content = await markdownToHtml(post.content);

  const fitleredRelatedPosts = relatedPosts.filter(
    (pst) => pst.realSlug !== slug
  );

  return {
    props: {
      post: {
        ...post,
        content,
      },
      fitleredRelatedPosts,
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
