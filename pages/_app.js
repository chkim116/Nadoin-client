import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // login 추후 api (커스텀 훅)
  // 기업 등록 추후 api (id 당 1개)

  const [loggedUser, setLoggedUser] = useState({
    logged: false,
    hasEnter: false,
  });
  const { logged, hasEnter } = loggedUser;

  const Nadoin = "나도인";

  const onLogged = (e) => {
    router.push("/");
    logged
      ? setLoggedUser({ ...loggedUser, logged: false })
      : setLoggedUser({ ...loggedUser, logged: true });
    document.getElementById("__next").scrollIntoView({ behavior: "smooth" });
  };

  const onJoinEnter = (e) => {
    router.push("/");
    // 기업 등록 완료 페이지 추가하기
    setLoggedUser({ ...loggedUser, hasEnter: true });
  };

  return (
    <>
      <Header logged={logged} onLogged={onLogged} />
      <Component
        {...pageProps}
        logged={logged}
        hasEnter={hasEnter}
        onLogged={onLogged}
        onJoinEnter={onJoinEnter}
        Nadoin={Nadoin}
      />
      <Footer />
    </>
  );
}

export default MyApp;
