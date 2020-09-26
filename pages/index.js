import Head from "next/head";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Section from "../components/home/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nadoin | 사람을 모으는 힘</title>
      </Head>
      <Header />
      <Section />
      <Footer />
    </>
  );
}
