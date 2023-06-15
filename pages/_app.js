import { Nunito } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <MainLayout className={nunito.className}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
