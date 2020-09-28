import styled from "styled-components";
import Aside from "./Aside";
import mainImg from "../../image/mainimage.png";
import img1 from "../../image/story1.png";
import img2 from "../../image/story2.png";
import img3 from "../../image/story3.png";

const Sections = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const WrapImg = styled.div`
  position: relative;
  padding-bottom: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  img {
    top: 45px;
    position: absolute;
    object-fit: fill;
    width: 100%;
    height: 100%;
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
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3em;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 780px) {
    margin-top: 0;
    flex-direction: column;
    text-align: center;
    .main__text {
      padding: 1em;
      h3 {
        margin: 1em 0;
      }
    }
  }
  img {
    width: 100%;
    max-width: 800px;
    height: 100%;
  }
`;

export default function Section() {
  return (
    <>
      <Sections>
        <WrapImg>
          <img src={mainImg} alt="배경이미지" />
        </WrapImg>
        <Main>
          <MainContent>
            <img src={img1} alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>
          <MainContent>
            <img src={img2} alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>

          <MainContent>
            <img src={img3} alt="컨텐츠이미지" />
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
            </div>
          </MainContent>
        </Main>
      </Sections>
      <Aside />
    </>
  );
}
