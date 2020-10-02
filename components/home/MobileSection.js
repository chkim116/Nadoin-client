import styled from "styled-components";
import house from "../../image/housekeeper.jpg";
import construction from "../../image/construction.jpg";
import care from "../../image/care.jpg";

const MobileSectionBlock = styled.div`
  display: none;
  @media all and (max-width: 940px) {
    display: block;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    .main__img {
      width: 90%;
      position: relative;
      text-align: center;
      margin: 1em auto;
      min-height: 200px;
      min-width: 280px;
      margin-bottom: 3em;
      img {
        width: 100%;
        object-fit: cover;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        height: 100%;
      }
      .main__img-desc {
        width: 100%;
        font-weight: bold;
        box-shadow: 0 0 1px 1px rgb(195, 195, 195);
        border-top: none;
        min-height: 40px;
        background: white;
        line-height: 40px;
        z-index: 2;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        position: relative;
        top: -7px;
        button {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default function MobileSection() {
  return (
    <>
      <MobileSectionBlock>
        <div className="main__img">
          <img src={construction} alt="컨텐츠이미지" />
          <div className="main__img-desc">
            <h3>어떤 지역에서 찾으세요?</h3>
            <button>지역별 찾기</button>
          </div>
        </div>
        <div className="main__img">
          <img src={care} alt="컨텐츠이미지" />
          <div className="main__img-desc">
            <h3>어떤 업종에서 찾으세요?</h3>
            <button>업종별 찾기</button>
          </div>
        </div>
        <div className="main__img">
          <img src={house} alt="컨텐츠이미지" />
          <div className="main__img-desc">
            <h3>어떤 분을 구인 하세요?</h3>
            <button>등록하기</button>
          </div>
        </div>
      </MobileSectionBlock>
    </>
  );
}
