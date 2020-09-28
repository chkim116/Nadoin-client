import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

const Headers = styled.header`
  background-color: white;
  z-index: 9999;
  position: fixed;
  width: 100%;
  top: 0;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  h3 {
    cursor: pointer;
  }
`;

const Logo = styled.h3`
  @media all and (max-width: 400px) {
    display: none;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    font-size: 14px;
    ul {
      @media all and (max-width: 780px) {
        display: none;
      }
    }
    li {
      margin: 0 1em;
      padding: 1em;
      cursor: pointer;
      position: relative;
      @media all and (max-width: 400px) {
        margin: 0;
      }

      &:hover:before {
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        right: 0;
        content: "";
        border-bottom: 2px solid #0984e3;
      }
    }
  }
`;

const Register = styled.div`
  @media all and (max-width: 780px) {
    display: none;
  }
  ul {
    display: flex;
    font-size: 15px;
    font-weight: bold;
    li {
      cursor: pointer;
      margin: 1em;
    }
  }
`;

const AsideSearch = styled.aside`
  position: absolute;
  top: 0;
  z-index: 20202;
  width: 100%;
  text-align: center;
  animation: searchbar 500ms forwards;
  background: white;
  padding: 0.6em 0;
  display: ${(props) => (props.show ? "block" : "none")};
  input {
    padding: 0.4em 1.2em;
    width: 30%;
    top: 0;
    text-align: center;
    &:focus {
      text-align: left;
    }
  }
  span {
    cursor: pointer;
  }
  @keyframes searchbar {
    0% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }
`;

const DropMenu = styled.ul`
  position: relative;

  &:hover ul {
    display: block;
  }
  & > ul {
    position: absolute;
    top: 46px;
    display: flex;
    flex-direction: column;
    width: 100%;
    display: none;
    cursor: pointer;
    li {
      background: white;
      margin: 0;
      padding: 0;
      text-align: center;
      padding: 1em 0;
      font-size: 12px;
      &:hover {
        background: #0984e3;
        color: white;
      }
    }
  }
`;

const MediaNav = styled.nav`
  display: none;
  @media all and (max-width: 780px) {
    top: 0;
    right: 5%;
    display: block;
    cursor: pointer;
    ul {
      position: fixed;
      display: ${(props) => (props.mediaShow ? "block" : "none")};
      top: 45px;
      width: 100%;
      height: 350px;
      text-align: center;
      right: 0;
      flex-direction: column;
      background: white;
      animation: mediabar 500ms forwards;
      padding: 1em 0;
      li {
        padding: 1em;
        &:hover {
          background: #0984e3;
        }
      }
    }

    @keyframes mediabar {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

export default function Header() {
  const [show, setShow] = useState(false);
  const [mediaShow, setMediaShow] = useState(false);

  const onClick = () => {
    show ? setShow(false) : setShow(true);
  };

  const onMedia = () => {
    mediaShow ? setMediaShow(false) : setMediaShow(true);
  };

  return (
    <>
      <Headers>
        <AsideSearch show={show}>
          <input type="text" placeholder="검색하세요!" />
          <span onClick={onClick}> X</span>
        </AsideSearch>
        <Logo>Nadoin</Logo>
        <Nav>
          <ul>
            <Link href="/">
              <a>
                <li>홈</li>
              </a>
            </Link>
            <Link href="/jobsearch">
              <a>
                <li>탐색</li>
              </a>
            </Link>
            <Link href="/matchup">
              <a>
                <li>매치업</li>
              </a>
            </Link>

            <DropMenu>
              <li>더보기</li>
              <ul>
                <Link href="/service">
                  <a>
                    <li>고객센터</li>
                  </a>
                </Link>
                <Link href="/suggestions">
                  <a>
                    <li>건의사항</li>
                  </a>
                </Link>
                <Link href="/questions">
                  <a>
                    <li>자주 묻는 질문</li>
                  </a>
                </Link>
              </ul>
            </DropMenu>
          </ul>
        </Nav>
        <Register>
          <ul>
            <li>
              <AiOutlineSearch size={20} onClick={onClick} />
            </li>
            <li>로그인</li>
            <Link href="/register">
              <a>
                <li>회원가입</li>
              </a>
            </Link>
            <Link href="/enterprise">
              <a>
                <li>기업 등록</li>
              </a>
            </Link>
          </ul>
        </Register>

        {/* 미디어 넷바, 어사이드창으로 띄울 것*/}
        <MediaNav onClick={onMedia} mediaShow={mediaShow}>
          <GiHamburgerMenu size={24} />
          <ul>
            <Link href="/">
              <a>
                <li>로그인</li>
              </a>
            </Link>
            <Link href="/register">
              <a>
                <li>회원가입</li>
              </a>
            </Link>
            <Link href="/enterprise">
              <a>
                <li>기업 등록</li>
              </a>
            </Link>
            <div
              style={{
                width: "50%",
                background: "black",
                height: "1px",
                margin: "0.3em auto",
              }}
            ></div>
            <Link href="/service">
              <a>
                <li>고객센터</li>
              </a>
            </Link>
            <Link href="/suggestions">
              <a>
                <li>건의사항</li>
              </a>
            </Link>
            <Link href="/questions">
              <a>
                <li>자주 묻는 질문</li>
              </a>
            </Link>
          </ul>
        </MediaNav>
      </Headers>
    </>
  );
}
