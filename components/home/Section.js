import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Aside from "./Aside";
import mainImg from "../../image/mainimage.png";
import house from "../../image/housekeeper.jpg";
import construction from "../../image/construction.jpg";
import moving from "../../image/moving.jpg";
import care from "../../image/care.jpg";

import Slider from "react-slick";

const SectionBlock = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  .main__aside-text {
    text-align: center;
    margin: 1em 0;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: auto;
  outline: none;
  margin: 0 auto;
  .slider {
    border: 1px solid black;
    padding: 1em;
    position: relative;
    padding-bottom: 30%;
    background: green;
    .slide {
      position: absoulte;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`;

const Main = styled.main`
  background: #f7fafd;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
`;

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
      cursor: pointer;
      font-weight: bold;
      background: #0984e3;
      color: white;
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
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      height: 100%;
    }
    .main__img-desc {
      width: 100%;
      border: 1px solid rgb(195, 195, 195);
      border-top: none;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      position: relative;
      top: -7px;
    }
  }
`;

const MainAside = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 3em auto;
  @media all and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin: 1em;
  }
  .main__aside {
    border: 1px solid black;
    margin: 0 0.4em;
    display: flex;
    width: 50%;
    height: 150px;
    @media all and (max-width: 780px) {
      margin: 0.5em 0;
      width: 70%;
      font-size: 14px;
      min-width: 300px;
    }
    .main__aside-img {
      width: 50%;
      height: 100%;
      object-fit: cover;
    }
    .main__aside-desc {
      text-align: center;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1em;
      button {
        width: 50%;
        padding: 0.5em 1em;
        cursor: pointer;
        font-weight: bold;
        background: #0984e3;
        color: white;
        border-radius: 33px;
        @media all and (max-width: 780px) {
          font-size: 14px;
        }
      }
    }
  }
`;

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
        cursor: pointer;
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

export default function Section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </>
      </Head>
      <Slide>
        <Slider {...settings} className="slider">
          <div className="slide slider__one">
            <h1>Why Nadoin?</h1>
            <h3>Our mission is to develop!</h3>
          </div>
          <div className="slide slider__two">
            <h1>When Nadoin?</h1>
            <h3>Everyday, Everywhere</h3>
          </div>
          <div className="slide slider__three">
            <h1>Serendipity</h1>
            <h3>New Creation, Unexpected Discovery</h3>
          </div>
        </Slider>
      </Slide>

      <SectionBlock>
        <Main>
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
          <MainContent>
            <div className="main__text">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
              <button>지역별로 찾아보기</button>
            </div>
            <div className="main__img">
              <img src={construction} alt="컨텐츠이미지" />
              <div class="main__img-desc">건설/인력</div>
            </div>
            <div className="main__img">
              <img src={care} alt="컨텐츠이미지" />
              <div class="main__img-desc">요양 보호</div>
            </div>
          </MainContent>
          <MainContent>
            <div className="main__img">
              <img src={moving} alt="컨텐츠이미지" />
              <div class="main__img-desc">이사</div>
            </div>
            <div className="main__img">
              <img src={moving} alt="컨텐츠이미지" />
              <div class="main__img-desc">파출부/청소부</div>
            </div>
            <div className="main__text right">
              <h3>일 잘하는 사람들을 위한 스마트한 이직</h3>
              <p>당신에게 딱 맞는 회사 지금 원티드에서 찾으세요.</p>
              <button>업종별로 찾아보기</button>
            </div>
          </MainContent>
          <h2 className="main__aside-text">저희랑 같이 가요!</h2>
          <MainAside>
            <div className="main__aside">
              <img
                className="main__aside-img"
                src={mainImg}
                alt="슬라이더이미지"
              ></img>
              <div className="main__aside-desc">
                <h4>기업 등록하실래요?</h4>
                <button>
                  <Link href="/enterprise">
                    <a>기업 등록</a>
                  </Link>
                </button>
              </div>
            </div>
            <div className="main__aside">
              <img
                className="main__aside-img"
                src={mainImg}
                alt="슬라이더이미지"
              ></img>
              <div className="main__aside-desc">
                <h4>광고 신청하실래요?</h4>
                <button>
                  <Link href="/enterprise">
                    <a>광고신청</a>
                  </Link>
                </button>
              </div>
            </div>
          </MainAside>
        </Main>
      </SectionBlock>
      <Aside />
    </>
  );
}
