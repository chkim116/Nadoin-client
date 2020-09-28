import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import MatchUp from "../components/match/MatchUp";

export default function Matchup() {
  return (
    <>
      <Head>
        <title>Nadoin | 매치업</title>
      </Head>
      <Header />
      <MatchUp />
      <Footer />
    </>
  );
}
