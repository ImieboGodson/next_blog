import { getPostSlugs, getPostBySlugs } from "@/lib/getPosts";

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const slugs = getPostSlugs();
    if (!slugs) {
      return res.status(500).json({
        message: "Internal server error, resource not available",
      });
    }
    const posts = slugs.map((slug) => {
      return getPostBySlugs(slug);
    });

    return res.status(200).json({
      message: "Data successfully Retrieved",
      posts,
    });
  }
  return res.status(404).json({ message: "Invalid request method" });
}