import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import Suggestion from "../components/viewmore/Suggestion";

export default function Suggestions() {
  return (
    <>
      <Head>
        <title>Nadoin | 건의사항</title>
      </Head>
      <Header />
      <Suggestion />
      <Footer />
    </>
  );
}
