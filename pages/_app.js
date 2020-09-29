import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [logged, setLogged] = useState(false);
  const onLogged = (e) => {
    router.push("/");
    logged ? setLogged(false) : setLogged(true);
    document.getElementById("__next").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Component {...pageProps} logged={logged} onLogged={onLogged} />;
      <Header logged={logged} onLogged={onLogged} />
    </>
  );
}

export default MyApp;
