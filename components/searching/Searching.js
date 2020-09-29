import { useRouter } from "next/router";
import styled from "styled-components";

const Searching = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Search() {
  const router = useRouter();

  return (
    <Searching>
      {router.query.value ? (
        <p>
          검색한 값은 <strong>{router.query.value}</strong>
          입니다.
        </p>
      ) : (
        <p>검색어를 입력하지 않으셨습니다.</p>
      )}
      <p>상세한 기능은 준비 중입니다.</p>
    </Searching>
  );
}
