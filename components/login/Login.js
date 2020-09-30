import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  top: 0;
  z-index: 100;
`;

const Article = styled.article`
  background: rgba(44, 62, 80, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const LoginModal = styled.div`
  padding: 1em;
  position: relative;
  height: 550px;
  width: 400px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;
  @media all and (max-width: 480px) {
    width: 100%;
  }
  span {
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 0 auto;
    right: 20px;
    top: 5px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      background: black;
      color: white;
    }
  }
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
    width: 70%;
    height: 40px;
    padding: 0.5em 1em;
    margin: 0.8em auto;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 12px;
    @media all and (max-width: 440px) {
      width: 70%;
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

export default function Login({ onLogged, onLogin, onSubmit, SocialBtnClick }) {
  return (
    <>
      <Section>
        <Article>
          <LoginModal>
            <h2>Login</h2>
            <span onClick={onLogin}>X</span>

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
                <a onClick={onLogin}>회원가입</a>
              </Link>
              <Link href="/user/passwordfind">
                <a onClick={onLogin}>비밀번호 찾기</a>
              </Link>
            </RegisterBtn>
          </LoginModal>
        </Article>
      </Section>
    </>
  );
}
