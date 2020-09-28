import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import Register from "../components/login/Register";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Nadoin | 회원가입</title>
      </Head>
      <Header />
      <Register />
      <Footer />
    </>
  );
}
