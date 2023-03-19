import React from "react";

export default function PostCardsLayout({ children }) {
  return (
    <div className="w-full min-h-fit py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 grid-layout">
      {children}
    </div>
  );
}
