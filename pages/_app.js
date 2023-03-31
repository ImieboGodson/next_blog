import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
