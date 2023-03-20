export default function formatCategory(tag) {
  let postCategory = "";

  switch (tag) {
    case "ai":
      postCategory = "Artificial Intelligence";
      break;
    case "nft":
      postCategory = "NFT";
      break;
    case "crypto":
      postCategory = "Crypto";
      break;
    case "technology":
      postCategory = "Technology";
      break;
    default:
      postCategory = null;
      break;
  }
  return postCategory;
}
