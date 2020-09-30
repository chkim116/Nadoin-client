import Header from "../../../components/Layouts/Header";
import Profile from "../../../components/users/Profile";
import Footer from "../../../components/Layouts/Footer";
import { useRouter } from "next/router";
import LoginPage from "../../../components/login/LoginPage";

export default function userProfile({ logged }) {
  const router = useRouter();

  return (
    <>
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
