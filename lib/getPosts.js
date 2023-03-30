import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const dataFolderPath = join(process.cwd(), "data", "posts");

export function getPostSlugs() {
  return fs.readdirSync(dataFolderPath);
}

export function getPostBySlugs(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dataFolderPath, `${realSlug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  return { data, content, realSlug };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlugs(slug))
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return posts;
}
