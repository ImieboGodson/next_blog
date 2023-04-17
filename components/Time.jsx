import React from "react";
import { parseISO, format } from "date-fns";

export default function Time({ dateString }) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL d, yyyy");
  return (
    <time className="m-0 text-xs text-[#7B8FA1] postDate">{formattedDate}</time>
  );
}
