import { PostCard } from "@/components/PostCard";
import PostCardsLayout from "@/components/PostCardsLayout";
import Time from "@/components/Time";
import formatCategory from "@/lib/formatCategory";
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
          <div className="w-[90%] my-14 mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            lectus iaculis, convallis diam id, accumsan nunc. Suspendisse
            vehicula sed elit in mattis. Donec hendrerit odio quis neque
            lacinia, vitae faucibus ante fermentum. Mauris eu mollis augue.
            Maecenas vehicula sed dolor eu facilisis. Donec at iaculis nunc.
            Donec et massa arcu. Donec lobortis ultrices mollis. Curabitur
            rhoncus nulla lectus, sit amet tincidunt mauris efficitur at.
            <br></br> <br></br> Etiam dictum tincidunt metus, et imperdiet
            lectus aliquet sit amet. Morbi imperdiet semper dui. Fusce fringilla
            in ligula at consequat. Duis id auctor turpis. Suspendisse nibh
            ligula, condimentum eget ultricies ac, commodo ut lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris rutrum, dui sit amet feugiat
            pulvinar, leo dui interdum quam, vitae sollicitudin sem purus
            laoreet sapien. Cras sit amet ante vitae lacus euismod suscipit.
            <br></br> <br></br>
            Mauris in lorem augue. Vestibulum suscipit porttitor sem vel
            accumsan. Maecenas posuere odio nibh, malesuada pretium nunc
            vestibulum id. Vivamus sollicitudin molestie erat eu scelerisque. Ut
            accumsan velit ac mi vehicula mattis ut a nulla. In ac dictum
            tortor. Pellentesque sed pellentesque augue. Donec vel lectus at
            risus accumsan luctus. Sed lacinia massa eu tortor accumsan cursus
            convallis non lacus. Phasellus augue lectus, consectetur sit amet
            dignissim at, consectetur porta lorem. Etiam ut odio vitae nibh
            pretium congue ut vitae velit. Vivamus et metus sit amet lectus
            fringilla tempus et non tortor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus vitae purus in est venenatis
            dictum. Maecenas eu convallis lorem, id vehicula erat. Nulla
            accumsan eros elementum lorem tincidunt, quis suscipit velit
            sollicitudin. <br></br> <br></br> Praesent ullamcorper at mi et
            mattis. Aenean in convallis sem. Ut laoreet turpis ac leo finibus
            consequat. Duis iaculis accumsan velit, in iaculis sem suscipit non.
            In vitae eros sed lectus sollicitudin egestas. Quisque eget odio
            diam. Nullam pellentesque gravida ante in dictum. Sed lacinia vel
            justo nec interdum.
          </div>
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

  const fitleredRelatedPosts = relatedPosts.filter(
    (pst) => pst.realSlug !== slug
  );

  return {
    props: {
      post,
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
