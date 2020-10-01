import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import CompanyRegister from "../components/enterprise/CompanyRegister";
import PleaseLogin from "../components/etc/PleaseLogin";
import Title from "../components/Layouts/Title";

export default function Enterprise({ logged, hasEnter, Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="기업 등록" />
      <Header />
      {logged ? <CompanyRegister hasEnter={hasEnter} /> : <PleaseLogin />}
      <Footer />
    </>
  );
}
