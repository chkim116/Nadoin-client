import Head from "next/head";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import LoginPage from "../components/login/LoginPage";

export default function joinPage({ onLogged, logged }) {
  return (
    <>
      <Head>
        <title>Nadoin | 로그인</title>
      </Head>
      <Header />
      {logged ? <div>로그인 했습니다</div> : <LoginPage onLogged={onLogged} />}
      <Footer />
    </>
  );
}
