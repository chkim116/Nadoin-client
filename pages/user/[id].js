import Header from "../../components/Layouts/Header";
import Profile from "../../components/users/Profile";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";

export default function userProfile() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Profile router={router} />
      <Footer />
    </>
  );
}
