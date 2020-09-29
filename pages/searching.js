import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import Search from "../components/searching/Searching";

export default function Searching() {
  return (
    <>
      <Head>
        <title>Nadoin | 검색결과</title>
      </Head>
      <Header />
      <Search />
      <Footer />
    </>
  );
}
