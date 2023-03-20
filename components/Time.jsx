import React from "react";
import { parseISO, format } from "date-fns";

export default function Time({ dateString }) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL d, yyyy");
  return <time className="text-xs postDate">{formattedDate}</time>;
}
