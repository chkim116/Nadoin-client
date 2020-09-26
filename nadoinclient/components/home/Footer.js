import styled from "styled-components";

const WrapImg = styled.div`
  position: relative;
  margin-top: 4em;
  padding-bottom: 36%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const Footers = styled.footer`
  width: 100%;
  padding: 2em;
  min-height: 210px;
  text-align: center;
  ul {
    justify-content: center;
    align-items: center;
    display: flex;
    li {
      margin: 1em;
      cursor: pointer;
    }
  }
`;

const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <WrapImg>
        <img alt="배경이미지" />
        <div>
          <h1>이 세상 모든 현장을 위한 발걸음</h1>
          <h1>사람을 찾습니다, 나도인</h1>
          <p>지금 나도인과 함께 힘찬 도약을 시작하세요</p>
          <button>지금 시작하기</button>
        </div>
      </WrapImg>

      <Footers>
        <ul>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>고객센터</li>
        </ul>
        <div>
          <small>&copy;{Year} taek&kim </small>
        </div>
        <div>
          <small>(주)택김 컴퍼니 | 경기도 성남시 분당구 서현로</small>
        </div>
      </Footers>
    </>
  );
}
