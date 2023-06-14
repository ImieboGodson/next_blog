import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useStore } from "@/store/store";

export default function MainLayout({ children }) {
  const { isOpen } = useStore();
  return (
    <div className={`${isOpen ? "w-screen h-screen overflow-hidden" : ""}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
