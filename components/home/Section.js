import styled from "styled-components";
import Head from "next/head";
import Aside from "./Aside";
import Slider from "react-slick";
import MobileSection from "./MobileSection";
import MainContents from "./MainCotents";
import MainAside from "./MainAside";

const SectionBlock = styled.main`
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
    position: relative;
    padding-bottom: 30%;
    outline: none;
    background: green;
    width: 100%;
    .slide {
      position: absoulte;
      top: 0;
      outline: none;
      pointer-events: none;
      padding: 1em;
      width: 100%;
    }
  }
  .slick-next {
    right: 3px;
  }
  .slick-prev {
    left: 3px;
  }
  .slick-track {
    width: 100%;
  }
`;

const Main = styled.section`
  background: #f7fafd;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
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
          <MobileSection />
          <MainContents />
          <h2 className="main__aside-text">저희랑 같이 가요!</h2>
          <MainAside />
        </Main>
      </SectionBlock>
      <Aside />
    </>
  );
}
