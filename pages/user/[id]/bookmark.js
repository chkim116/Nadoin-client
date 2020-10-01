import Footer from "../../../components/Layouts/Footer";
import Header from "../../../components/Layouts/Header";
import Title from "../../../components/Layouts/Title";
import LoginPage from "../../../components/login/LoginPage";

export default function bookmark({ logged }) {
  return (
    <>
      <Title title={Nadoin} desc="북마크" />
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
