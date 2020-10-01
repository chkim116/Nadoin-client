import styled from "styled-components";

const SectionBlock = styled.section`
  width: 100%;
  text-align: center;
`;

export default function Profile({ router }) {
  const { id } = router.query;
  return (
    <SectionBlock>
      <p>id 값에 맞춘 프로필 불러오기</p>
      <p>url id의 값은 {id}</p>
    </SectionBlock>
  );
}
