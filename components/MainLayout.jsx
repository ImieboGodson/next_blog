import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { useStore } from "@/store/store";

export default function MainLayout({ children }) {
  const { isOpen } = useStore();
  return (
    <div className={`${isOpen ? "w-screen h-screen overflow-hidden" : ""}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
