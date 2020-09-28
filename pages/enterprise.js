import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import CompanyRegister from "../components/enterprise/CompanyRegister";

export default function Enterprise() {
  return (
    <>
      <Head>
        <title>Nadoin | 기업 등록</title>
      </Head>
      <Header />
      <CompanyRegister />
      <Footer />
    </>
  );
}
