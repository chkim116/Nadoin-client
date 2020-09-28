import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import Search from "../components/jobsearch/Search";

export default function Jobsearch() {
  return (
    <>
      <Head>
        <title>Nadoin | 채용 탐색</title>
      </Head>
      <Header />
      <Search />
      <Footer />
    </>
  );
}
