import { getPostSlugs, getPostBySlugs } from "@/lib/getPosts";

export default function handler(req, res) {
  const { method, query } = req;

  const categories = ["nft", "ai", "technology", "crypto"];
  const slugs = getPostSlugs();

  const { cat, slug } = query;
  console.log(cat);

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

    const allPosts = slugs.map((slug) => {
      return getPostBySlugs(slug);
    });

    const relatedPosts = allPosts
      .filter((pst) => pst.data.tag === cat)
      .sort((pst1, pst2) => (pst1.data.date > pst2.data.date ? -1 : 1));

    return res.status(200).json({ message: "Success", post, relatedPosts });
  }
  res.status(404).json({ message: "Invalid request method" });
}
