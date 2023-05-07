import { getPostSlugs, getPostBySlugs } from "@/lib/getPosts";

export default function handler(req, res) {
  const { method, query } = req;
  // console.log(query);

  const categories = ["nft", "ai", "technology", "crypto"];

  const { cat } = query;

  if (method === "GET") {
    if (!categories.includes(cat)) {
      return res.status(400).json({
        message: "Invalid Request, resource is alien",
      });
    }

    const slugs = getPostSlugs();
    if (!slugs) {
      return res.status(500).json({
        message: "Internal server error, resource not available",
      });
    }
    const posts = slugs.map((slug) => {
      return getPostBySlugs(slug);
    });

    const postsByCategory = posts
      .filter((post) => {
        if (post.data.tag === cat) {
          return post.data;
        }
      })
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    if (!postsByCategory) {
      return res.status(400).json({
        message: "Resource not available",
      });
    }

    return res.status(200).json({
      message: "Success",
      posts: postsByCategory,
    });
  }
  return res.status(404).json({ message: "Invalid request method" });
}
