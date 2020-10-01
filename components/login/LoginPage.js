import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const SectionBlock = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 550px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 0.5em;
  &::before {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    content: "or";
    opacity: 0.5;
  }
  input {
    width: 300px;
    height: 40px;
    padding: 0.5em 1em;
    margin: 0.8em auto;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 12px;
    @media all and (max-width: 440px) {
      width: 210px;
    }
  }
  input:nth-child(3) {
    outline: none;
    width: 250px;
    height: 35px;
    border: 1px solid rgb(195, 195, 195);
    background: #0984e3;
    color: white;
    border-radius: 12px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    @media all and (max-width: 440px) {
      width: 150px;
    }
  }
`;

const SocialBtn = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 0.8em 0;
    cursor: pointer;
    text-align: center;
    width: 250px;
    height: 40px;
    box-shadow: 0 1px 2px 3px #ecf0f1;
    border-radius: 12px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
`;

const RegisterBtn = styled.div`
  display: flex;
  text-align: center;
  a {
    font-size: small;
    margin: 0 0.5em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage({ onLogged }) {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const SocialBtnClick = (e) => {
    const { name } = e.target;
    alert(`${name} 가입은 구현 중입니다.`);
  };

  return (
    <SectionBlock>
      <h3>로그인</h3>
      <LoginForm onSubmit={onSubmit}>
        <input type="text" placeholder="이메일 입력" />
        <input type="password" placeholder="비밀번호 입력" />
        <input type="submit" onClick={onLogged} value="로그인" />
      </LoginForm>
      <SocialBtn onClick={SocialBtnClick}>
        <button type="button" name="네이버">
          네이버로 시작하기
        </button>
        <button type="button" name="카카오">
          카카오로 시작하기
        </button>
        <button type="button" name="페이스북">
          페이스북으로 시작하기
        </button>
      </SocialBtn>
      <RegisterBtn>
        <Link href="/register">
          <a>회원가입</a>
        </Link>
        <Link href="/user/passwordfind">
          <a>비밀번호 찾기</a>
        </Link>
      </RegisterBtn>
    </SectionBlock>
  );
}
