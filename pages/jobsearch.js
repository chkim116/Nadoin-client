import Search from "../components/jobsearch/Search";
import Title from "../components/Layouts/Title";

export default function Jobsearch({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="채용탐색" />
      <Search />
    </>
  );
}
