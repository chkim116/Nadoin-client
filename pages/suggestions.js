import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Suggestion from "../components/viewmore/Suggestion";

export default function Suggestions({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="건의사항" />
      <Header />
      <Suggestion />
      <Footer />
    </>
  );
}
