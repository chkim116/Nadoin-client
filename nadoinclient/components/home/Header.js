import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useCallback, useState } from "react";

const Headers = styled.header`
  background-color: white;
  z-index: 9999;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    font-size: 14px;
    @media all and (max-width: 700px) {
      display: none;
    }
    li {
      margin: 0 1em;
      padding: 1em;
      cursor: pointer;
      position: relative;
      &:hover:before {
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        content: "";
        border-bottom: 2px solid grey;
      }
    }
  }
`;

const Register = styled.div`
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
  animation: searchbar 1s forwards;
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

export default function Header() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <AsideSearch show={show}>
        <input type="text" placeholder="검색하세요!" />
        <span onClick={onClick}> X</span>
      </AsideSearch>
      <Headers>
        <h3>Nadoin</h3>
        <Nav>
          <ul>
            <li>홈</li>
            <li>탐색</li>
            <li>이력서</li>
            <li>매치업</li>
          </ul>
        </Nav>
        <Register>
          <ul>
            <li>
              <AiOutlineSearch size={20} onClick={onClick} />
            </li>
            <li>로그인</li>
            <li>회원가입</li>
            <li>기업 등록</li>
          </ul>
        </Register>
      </Headers>
    </>
  );
}
