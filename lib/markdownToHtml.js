import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(text) {
  const htmlOutput = await remark().use(html).process(text);
  return htmlOutput.toString();
}
