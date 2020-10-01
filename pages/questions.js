import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Question from "../components/viewmore/Question";
import Title from "../components/Layouts/Title";

export default function Service({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="자주 묻는 질문" />
      <Header />
      <Question />
      <Footer />
    </>
  );
}
