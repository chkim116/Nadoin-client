import Title from "../../../components/Layouts/Title";
import LoginPage from "../../../components/login/LoginPage";

export default function bookmark({ logged, Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="북마크" />
      {logged ? (
        <>
          <div>북마크 페이지</div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
