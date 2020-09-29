import { useState } from "react";
import Header from "../components/Layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [logged, setLogged] = useState(true);

  return (
    <>
      <Component {...pageProps} logged={logged} />;
      <Header logged={logged} />
    </>
  );
}

export default MyApp;
