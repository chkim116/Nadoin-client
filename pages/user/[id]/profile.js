import Profile from "../../../components/users/Profile";
import { useRouter } from "next/router";
import LoginPage from "../../../components/login/LoginPage";
import Title from "../../../components/Layouts/Title";

export default function userProfile({ logged, Nadoin }) {
  const router = useRouter();

  return (
    <>
      <Title title={Nadoin} desc="유저 프로필" />
      {logged ? (
        <>
          <Profile router={router} />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
