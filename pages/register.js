import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Register from "../components/login/Register";
import Title from "../components/Layouts/Title";

export default function RegisterPage({ logged, onLogged, Nadoin }) {
  return (
    <>
      <>
        <Title title={Nadoin} desc="회원가입" />
        <Header />
        {logged ? (
          <div>이미 가입하셨습니다</div>
        ) : (
          <Register onLogged={onLogged} />
        )}
        <Footer />
      </>
    </>
  );
}
