import styled from "styled-components";
import Link from "next/link";

const WrapImg = styled.div`
  position: relative;
  padding-bottom: 20%;
  width: 100%;
  display: flex;
  box-shadow: 0 0 1px 1px rgb(195, 195, 195);
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
  align-items: center;
  text-align: center;
  aside {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #393667;
    top: 0;
  }
  div {
    position: absolute;
    top: 50%;
    color: white;
    left: 50%;
    transform: translate(-50%, -50%);
    @media all and (max-width: 780px) {
      font-size: 12px;
    }
    button {
      cursor: pointer;
      width: 180px;
      height: 50px;
      margin-top: 1em;
      font-weight: bold;
      border-radius: 33px;
      background: #0984e3;
      color: white;
    }
  }
`;
export default function Aside() {
  return (
    <>
      <WrapImg>
        <aside />
        <div>
          <h2>이 세상 모든 현장을 위한 발걸음</h2>
          <h2>사람을 찾습니다, 나도인</h2>
          <p>지금 나도인과 함께 힘찬 도약을 시작하세요</p>
          <button>
            <Link href="jobsearch">
              <a>저와 같이 시작해요!</a>
            </Link>
          </button>
        </div>
      </WrapImg>
    </>
  );
}
