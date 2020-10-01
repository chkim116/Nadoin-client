import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
import Title from "../../components/Layouts/Title";
import Password from "../../components/users/Password";

export default function passwordfind({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="패스워드 찾기" />
      <Header />
      <Password />
      <Footer />
    </>
  );
}
