import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Search from "../components/jobsearch/Search";
import Title from "../components/Layouts/Title";

export default function Jobsearch({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="채용탐색" />
      <Header />
      <Search />
      <Footer />
    </>
  );
}
