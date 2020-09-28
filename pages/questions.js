import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import Question from "../components/viewmore/Question";

export default function Service() {
  return (
    <>
      <Head>
        <title>Nadoin | 자주 묻는 질문</title>
      </Head>
      <Header />
      <Question />
      <Footer />
    </>
  );
}
