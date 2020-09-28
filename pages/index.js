import Head from "next/head";
import Section from "../components/home/Section";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";

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
