import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Title from "../components/Layouts/Title";
import MatchUp from "../components/match/MatchUp";

export default function Matchup({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="매치업" />
      <Header />
      <MatchUp />
      <Footer />
    </>
  );
}
