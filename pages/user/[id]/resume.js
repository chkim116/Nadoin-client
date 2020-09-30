import Footer from "../../../components/Layouts/Footer";
import Header from "../../../components/Layouts/Header";
import LoginPage from "../../../components/login/LoginPage";

export default function resume({ logged }) {
  return (
    <>
      {logged ? (
        <>
          <Header />
          <div>이력서페이지</div>
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
