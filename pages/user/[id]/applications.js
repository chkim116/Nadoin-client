import Footer from "../../../components/Layouts/Footer";
import Header from "../../../components/Layouts/Header";
import LoginPage from "../../../components/login/LoginPage";

export default function applications({ logged }) {
  return (
    <>
      {logged ? (
        <>
          <Header />
          <div>지원현황 페이지</div>
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
