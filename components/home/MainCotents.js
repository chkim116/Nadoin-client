import styled from "styled-components";
import construction from "../../image/construction.jpg";
import moving from "../../image/moving.jpg";
import care from "../../image/care.jpg";

const MainContent = styled.div`
  display: flex;
  max-width: 1200px;
  background: white;
  border: 1px solid rgb(195, 195, 195);
  width: 100%;
  min-height: 300px;
  margin: 1em auto;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 940px) {
    display: none;
  }

  &:nth-child(2) {
    @media all and (max-width: 940px) {
      position: relative;
    }
  }
  .main__text {
    width: 35%;
    h3,
    p {
      text-align: left;
    }
    button {
      margin-top: 1em;
      width: 150px;
      height: 35px;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      background: #0984e3;
      color: white;
      cursor: pointer;
      border-radius: 33px;
    }
    &.right {
      text-align: right;
      h3,
      p {
        text-align: right;
      }
    }
  }
  .main__img {
    width: 25%;
    text-align: center;
    position: relative;
    margin: 1em 0.5em;
    height: auto;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 12px;
      height: 100%;
      border: 1px solid rgb(195, 195, 195);
    }
    .main__img-desc {
      width: 100%;
      border-top: none;
      padding: 0.7em;
      position: relative;
      top: -7px;
    }
  }
`;

export default function MainContents() {
  return (
    <>
      <MainContent>
        <div className="main__text">
          <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
          <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
          <button>지역별로 찾아보기</button>
        </div>
        <div className="main__img">
          <img src={construction} alt="컨텐츠이미지" />
          <div className="main__img-desc desc">건설/인력</div>
        </div>
        <div className="main__img">
          <img src={care} alt="컨텐츠이미지" />
          <div className="main__img-desc desc">요양 보호</div>
        </div>
      </MainContent>
      <MainContent>
        <div className="main__img">
          <img src={moving} alt="컨텐츠이미지" />
          <div className="main__img-desc desc">이사</div>
        </div>
        <div className="main__img">
          <img src={moving} alt="컨텐츠이미지" />
          <div className="main__img-desc desc">파출부/청소부</div>
        </div>
        <div className="main__text right">
          <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
          <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
          <button>업종별로 찾아보기</button>
        </div>
      </MainContent>
    </>
  );
}
