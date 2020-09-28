import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import MatchUp from "../components/match/MatchUp";
export default function resume() {
  return (
    <>
      <Head>
        <title>Nadoin | 이력서 작성</title>
      </Head>
      <Header />
      <MatchUp />
      <Footer />
    </>
  );
}
