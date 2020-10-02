import Title from "../../../components/Layouts/Title";
import LoginPage from "../../../components/login/LoginPage";

export default function resume({ logged, Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="이력서" />
      {logged ? (
        <>
          <div>이력서페이지</div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
