import { join } from "path";
import fs from "fs";
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
