export default function truncateText(length, text) {
  let truncatedText = text.slice(length, text.length);
  let shortText = text.replace(truncatedText, "...");
  return shortText;
}
