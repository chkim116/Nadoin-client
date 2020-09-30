import { useRouter } from "next/router";
import styled from "styled-components";

const Section = styled.section`
  padding: 1em;
  button {
    cursor: pointer;
  }
`;

export default function PleaseLogin() {
  const router = useRouter();

  const onClick = () => {
    router.push("/join");
  };
  return (
    <>
      <Section>
        <p>로그인부터 해야 합니다.</p>
        <button onClick={onClick}>눌러서 로그인 하기</button>
      </Section>
    </>
  );
}
