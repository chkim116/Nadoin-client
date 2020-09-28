import styled from "styled-components";

const WrapImg = styled.div`
  position: relative;
  margin-top: 4em;
  padding-bottom: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
  align-items: center;
  text-align: center;
  img {
    position: absolute;
    background: green;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    top: 0;
  }
  div {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media all and (max-width: 780px) {
      font-size: 12px;
    }
    button {
      cursor: pointer;
      padding: 1em 2em;
      margin-top: 1em;
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
        <img alt="배경이미지" />
        <div>
          <h2>이 세상 모든 현장을 위한 발걸음</h2>
          <h2>사람을 찾습니다, 나도인</h2>
          <p>지금 나도인과 함께 힘찬 도약을 시작하세요</p>
          <button>지금 시작하기</button>
        </div>
      </WrapImg>
    </>
  );
}
