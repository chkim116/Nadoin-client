import Title from "../components/Layouts/Title";
import Suggestion from "../components/viewmore/Suggestion";

export default function Suggestions({ Nadoin }) {
  return (
    <>
      <Title title={Nadoin} desc="건의사항" />
      <Suggestion />
    </>
  );
}
