import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import CustomerService from "../components/viewmore/CustomerService";

export default function Service() {
  return (
    <>
      <Head>
        <title>Nadoin | 고객센터</title>
      </Head>
      <Header />
      <CustomerService />
      <Footer />
    </>
  );
}
