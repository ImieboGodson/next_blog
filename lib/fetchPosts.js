export async function fetchPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/posts`);
  const { posts } = await response.json();
  return posts;
}

export async function fetchPostsByCategory(cat) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/posts/category/${cat}`
  );
  const { posts } = await response.json();
  return posts;
}
