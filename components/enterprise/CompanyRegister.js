import styled from "styled-components";

const SectionBlock = styled.section`
  padding: 1em;
`;

export default function CompanyRegister({ hasEnter }) {
  if (hasEnter) {
    alert("이미 등록하셨습니다");
  }
  return (
    <>
      <SectionBlock>기업 등록 관련 페이지는 준비 중 입니다.</SectionBlock>
      {/* 기업 등록에 대한 설명 */}
      {/* 기업 등록을 누르는 창 + 로그인해야 가능하게 만들기 */}
    </>
  );
}
