import styled from "styled-components";
import Link from "next/link";
import mainImg from "../../image/mainimage.png";

const MainAsideBlock = styled.div`
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
      width: 85%;
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

export default function MainAside() {
  return (
    <MainAsideBlock>
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
    </MainAsideBlock>
  );
}
