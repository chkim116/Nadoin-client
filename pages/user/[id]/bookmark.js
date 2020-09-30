import Footer from "../../../components/Layouts/Footer";
import Header from "../../../components/Layouts/Header";
import LoginPage from "../../../components/login/LoginPage";

export default function bookmark({ logged }) {
  return (
    <>
      {logged ? (
        <>
          <Header />
          <div>북마크 페이지</div>
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
