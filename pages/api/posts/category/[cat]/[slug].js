import { getPostSlugs, getPostBySlugs } from "@/lib/getPosts";

export default function handler(req, res) {
  const { method, query } = req;

  const categories = ["nft", "ai", "technology", "crypto"];
  const slugs = getPostSlugs();

  const { cat, slug } = query;
  console.log(slug);

  if (method === "GET") {
    //Check for validity of category passed in request
    if (!categories.includes(cat)) {
      return res.status(400).json({
        message: "Invalid Request, resource is alien",
      });
    }

    //Check for validity of article slug passed in request
    if (!slugs.includes(`${slug}.md`)) {
      return res.status(404).json({
        message: "Invalid request, resource not found",
      });
    }

    const post = getPostBySlugs(slug);
    if (!post) {
      return res
        .status(400)
        .json({ message: "Invalid request, resource not found" });
    }
    return res.status(200).json({ message: "Success", post });

    // const slugs = getPostSlugs();
    // if (!slugs) {
    //   res.status(500).json({
    //     message: "Internal server error, resource not available",
    //   });
    // }
    // const posts = slugs.map((s) => {
    //   return getPostBySlugs(s);
    // });

    // const post = posts.find((post) => post.data.title === slug);
    // console.log(post);
    // if (!post) {
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid request, resource not found" });
    // }
    // return res.status(200).json({ message: "Success", post });
  }
  res.status(404).json({ message: "Invalid request method" });
}
