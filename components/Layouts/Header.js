import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
    display: block;
    font-size: 3px;
  }
`;

export default function Header() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  const onClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
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
            <li>탐색</li>
            <Link href="/matchup">
              <a>
                <li>매치업</li>
              </a>
            </Link>

            <DropMenu>
              <li>더보기</li>
              <ul>
                <li>고객센터</li>
                <li>이벤트</li>
                <li>자주 묻는 질문</li>
              </ul>
            </DropMenu>
          </ul>
        </Nav>
        <Register>
          <ul>
            <li>
              <AiOutlineSearch size={20} onClick={onClick} />
            </li>
            <Link href="/">
              <a>
                <li>로그인</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>회원가입</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>기업 등록</li>
              </a>
            </Link>
          </ul>
        </Register>
        <MediaNav>
          햄버거
          <ul>
            <Link href="/">
              <a>
                <li>로그인</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>회원가입</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>기업 등록</li>
              </a>
            </Link>
          </ul>
          <ul>
            <li>고객센터</li>
            <li>이벤트</li>
            <li>자주 묻는 질문</li>
          </ul>
        </MediaNav>
      </Headers>
    </>
  );
}
