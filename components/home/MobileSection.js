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
      width: 60%;
      text-align: center;
      position: relative;
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
        border: 1px solid rgb(195, 195, 195);
        border-top: none;
        min-height: 40px;
        background: white;
        line-height: 40px;
        z-index: 2;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        position: relative;
        top: -7px;
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
          <div className="main__img-desc">건설업 등 일용직</div>
        </div>
        <div className="main__img">
          <img src={care} alt="컨텐츠이미지" />
          <div className="main__img-desc">요양 및 간병인</div>
        </div>
        <div className="main__img">
          <img src={house} alt="컨텐츠이미지" />
          <div className="main__img-desc">전문청소인력</div>
        </div>
      </MobileSectionBlock>
    </>
  );
}
