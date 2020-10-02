import Title from "../components/Layouts/Title";
import Search from "../components/searching/Searching";

export default function Searching({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="검색 결과" />
      <Search />
    </>
  );
}
