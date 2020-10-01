import Footer from "../../../components/Layouts/Footer";
import Header from "../../../components/Layouts/Header";
import Title from "../../../components/Layouts/Title";
import LoginPage from "../../../components/login/LoginPage";

export default function applications({ logged }) {
  return (
    <>
      <Title title={Nadoin} desc="지원현황" />
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
