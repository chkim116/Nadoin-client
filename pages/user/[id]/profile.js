import Header from "../../../components/Layouts/Header";
import Profile from "../../../components/users/Profile";
import Footer from "../../../components/Layouts/Footer";
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
          <Header />
          <Profile router={router} />
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
