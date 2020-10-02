import Title from "../components/Layouts/Title";
import CustomerService from "../components/viewmore/CustomerService";

export default function Service({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="고객센터" />
      <CustomerService />
    </>
  );
}
