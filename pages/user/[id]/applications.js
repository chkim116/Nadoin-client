import Title from "../../../components/Layouts/Title";
import LoginPage from "../../../components/login/LoginPage";

export default function applications({ logged, Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="지원현황" />
      {logged ? (
        <>
          <div>지원현황 페이지</div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
