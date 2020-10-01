import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Title from "../components/Layouts/Title";
import CustomerService from "../components/viewmore/CustomerService";

export default function Service({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="고객센터" />
      <Header />
      <CustomerService />
      <Footer />
    </>
  );
}
