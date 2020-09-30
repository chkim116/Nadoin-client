import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import CompanyRegister from "../components/enterprise/CompanyRegister";
import PleaseLogin from "../components/etc/PleaseLogin";

export default function Enterprise({ logged, hasEnter }) {
  return (
    <>
      <Head>
        <title>Nadoin | 기업 등록</title>
      </Head>
      <Header />
      {logged ? <CompanyRegister hasEnter={hasEnter} /> : <PleaseLogin />}
      <Footer />
    </>
  );
}
