import PageLayout from "@/components/PageLayout";
import PostCardsLayout from "@/components/PostCardsLayout";
import Time from "@/components/Time";
import formatCategory from "@/lib/formatCategory";
import {
  getPostBySlugs,
  getRelatedPosts,
  getSortedPosts,
} from "@/lib/getPosts";
import { markdownToHtml } from "@/lib/markdownToHtml";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaDribbble } from "react-icons/fa";
import { FiTwitter, FiLinkedin, FiTriangle, FiStar } from "react-icons/fi";

export default function Post({ post, relatedPosts }) {
  const { data, postbody } = post;
  return (
    <>
      {!post ? (
        <p>Post is not available at the momment</p>
      ) : (
        <article>
          <Head>
            <title>{post.data.title}</title>
            <meta property="og:image" content={post.data.ogImage.url} />
          </Head>
          <main className="">
            <div className="relative flex justify-center items-start p-10 bg-[#00235B] text-white">
              <div className="w-[70%] h-[250px] py-6 flex justify-between items-start">
                <div className="">
                  <Link href={`/category/${data.tag}/`}>
                    <p className="text-base font-medium text-[#2192FF]">
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
                      <div className="relative mx-[4px] w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#635985] overflow-hidden">
                        <FaInstagram className="text-[#fff]" size={18} />
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="relative mx-[4px] w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#2192FF] overflow-hidden">
                        <FiTwitter className="text-[#fff]" size={18} />
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="relative ml-[4px] w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#635985] overflow-hidden">
                        <FiLinkedin className="text-[#fff]" size={18} />
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
            <PageLayout>
              <div className="mx-auto w-[75%] flex flex-col items-center">
                <div className="relative mt-[-100px] w-full h-[500px] rounded-[35px] overflow-hidden cover-shadow">
                  <Image
                    className="object-cover"
                    src={data.coverImage}
                    fill
                    alt="Post Cover Image"
                  />
                </div>
                <div
                  className="w-[90%] my-10 mx-auto postbody text-[#2A2F4F]"
                  dangerouslySetInnerHTML={{ __html: postbody }}
                ></div>
              </div>
              <>
                {!relatedPosts ? (
                  ""
                ) : (
                  <div className="w-full flex flex-col justify-between items-center">
                    <h1 className="my-12 text-3xl font-extrabold">
                      Related Articles
                    </h1>
                    <PostCardsLayout
                      posts={relatedPosts}
                      cardType="related-posts"
                    />
                  </div>
                )}
              </>
            </PageLayout>
          </main>
        </article>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        cat: post.data.tag.toString(),
        slug: post.realSlug.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { cat, slug } = context.params;
  const { data, content } = getPostBySlugs(slug);
  const postbody = await markdownToHtml(content);

  const relatedPosts = getRelatedPosts(cat, slug);

  return {
    props: {
      post: {
        data,
        postbody,
      },
      relatedPosts,
    },
  };
}
