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

export function getSortedPosts() {
  const slugs = getPostSlugs();
  const sortedPosts = slugs
    .map((slug) => getPostBySlugs(slug))
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return sortedPosts;
}

export function getAllPosts() {
  const posts = getSortedPosts();
  return posts;
}

export function getAllCategory() {
  const posts = getSortedPosts();
  const categoryArray = posts.map((post) => {
    return post.data.tag;
  });
  const availableCategories = categoryArray.filter(
    (cat, index) => categoryArray.indexOf(cat) === index
  );
  return availableCategories;
}

export function getPostsByCategory(cat) {
  const posts = getSortedPosts();
  const filteredPosts = posts.filter((post) => post.data.tag === cat);
  return filteredPosts;
}

export function getRelatedPosts(cat, slug) {
  const categoryPosts = getPostsByCategory(cat);
  const relatedPosts = categoryPosts.filter((post) => post.realSlug !== slug);
  return relatedPosts;
}
