import styled from "styled-components";

const Sections = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const WrapImg = styled.div`
  position: relative;
  padding-bottom: 36%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .main__text {
    position: absolute;
    right: 9%;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainNav = styled.div`
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 1em;
      padding: 1em 2em;
      cursor: pointer;
      background: #0984e3;
      color: white;
      border-radius: 33px;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  height: 450px;
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3em;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 100%;
    background: green;
  }
`;

export default function Section() {
  return (
    <>
      <Sections>
        <WrapImg>
          <img alt="배경이미지" />
          <div>
            <h1>이 세상 모든 현장을 위한 발걸음</h1>
            <h1>사람을 찾습니다, 나도인</h1>
            <p>지금 나도인과 함께 힘찬 도약을 시작하세요</p>
            <button>지금 시작하기</button>
          </div>
        </WrapImg>
        <Main>
          <MainNav>
            <ul>
              <li>인력</li>
              <li>요양보호</li>
              <li>간병인</li>
              <li>펫시터</li>
              <li>파출부</li>
            </ul>
          </MainNav>
          <MainContent>
            <img alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>
          <MainContent>
            <img alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>

          <MainContent>
            <img alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>
        </Main>
      </Sections>
    </>
  );
}
