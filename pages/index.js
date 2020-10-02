import Section from "../components/home/Section";
import Title from "../components/Layouts/Title";

export default function Home({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="사람을 모으는 힘" />
      <Section />
    </>
  );
}
