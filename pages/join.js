import Title from "../components/Layouts/Title";
import LoginPage from "../components/login/LoginPage";

export default function joinPage({ onLogged, logged, Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="로그인" />
      {logged ? <div>로그인 했습니다</div> : <LoginPage onLogged={onLogged} />}
    </>
  );
}
