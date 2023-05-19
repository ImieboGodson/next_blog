export default function useSearch(posts, searchText) {
  if (!searchText) return null;

  const fitleredPosts = posts.filter((post) =>
    post.data["title"].toLowerCase().includes(searchText.toLowerCase())
  );

  const searchResultsArray = fitleredPosts.map((post) => {
    return {
      title: post.data["title"],
      image: post.data["coverImage"],
      date: post.data["date"],
      tag: post.data["tag"],
      slug: post.realSlug,
    };
  });

  return searchResultsArray;
}
