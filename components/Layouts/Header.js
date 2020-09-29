import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import router from "next/router";
import Login from "../login/Login";

const Headers = styled.header`
  background-color: white;
  z-index: 50;
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
  cursor: pointer;
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
  margin-left: 1.5em;
  z-index: 55;
  width: 100%;
  text-align: center;
  animation: searchbar 500ms forwards;
  background: white;
  padding: 0.6em 0;
  display: ${(props) => (props.show ? "block" : "none")};
  form {
    button {
      font-size: 12px;
      border: 1px solid black;
      padding: 0.4em 1.2em;
      margin: 0 0.5em;
      cursor: pointer;
    }
    input {
      padding: 0.4em 1.2em;
      width: 30%;
      top: 0;
      text-align: center;
      &:focus {
        text-align: left;
      }
      @media all and (max-width: 780px) {
        width: 50%;
      }
      @media all and (max-width: 480px) {
        width: 60%;
      }
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
    top: 48px;
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
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: auto;
      text-align: center;
      flex-direction: column;
      background: white;
      animation: mediabar 500ms forwards;
      padding: 1em 0;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
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

const Search = styled.div`
  cursor: pointer;
  margin-top: 14px;
`;

export default function Header({ logged, onLogged }) {
  const [show, setShow] = useState(false);
  const [mediaShow, setMediaShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [searching, setSearching] = useState({ value: "" });

  const onClick = () => {
    show ? setShow(false) : setShow(true);
  };

  const onMedia = () => {
    mediaShow ? setMediaShow(false) : setMediaShow(true);
  };

  const onLogin = () => {
    login ? setLogin(false) : setLogin(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push("/");
    setLogin(false);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setSearching({ ...searching, value });
  };

  const onSearching = (e) => {
    e.preventDefault();
    router.replace(`/searching?value=${searching.value}`);
    setSearching({ value: "" });
    e.target.reset();
    setShow(false);
  };

  const SocialBtnClick = (e) => {
    const { name } = e.target;
    alert(`${name} 가입은 구현 중입니다.`);
  };

  return (
    <>
      {login && (
        <Login
          SocialBtnClick={SocialBtnClick}
          onLogin={onLogin}
          onLogged={onLogged}
          onSubmit={onSubmit}
          login={login}
        />
      )}
      <Headers>
        <AsideSearch show={show}>
          <form onChange={onChange} onSubmit={onSearching}>
            <input type="text" placeholder="검색하세요!" />
            <button type="submit">검색</button>
            <span onClick={onClick}> X</span>
          </form>
        </AsideSearch>
        <Logo>
          <Link href="/">
            <a>Nadoin</a>
          </Link>
        </Logo>

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
            <Search>
              <AiOutlineSearch size={20} onClick={onClick} />
            </Search>
          </ul>
        </Nav>

        <Register>
          <ul>
            {logged ? (
              <>
                <li>알림</li>
                <div>
                  <img alt="프로필" />
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "absolute",
                    }}
                  >
                    <Link href="/user/[id]" as={"/user/EEKFN385#"}>
                      <a>
                        <li>프로필</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li>지원현황</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li>북마크</li>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <li onClick={onLogged}>로그아웃</li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li onClick={onLogin}>로그인</li>
                <Link href="/register">
                  <a>
                    <li>회원가입</li>
                  </a>
                </Link>
              </>
            )}
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
            {logged ? (
              <>
                <li>알림</li>
                <Link href="/user/[id]" as={"/user/EEKFN385#"}>
                  <a>
                    <li>프로필</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>지원현황</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>북마크</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li onClick={onLogged}>로그아웃</li>
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
              </>
            ) : (
              <>
                <li onClick={onLogin}>로그인</li>
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
              </>
            )}
          </ul>
        </MediaNav>
      </Headers>
    </>
  );
}
