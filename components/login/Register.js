import styled from "styled-components";

const SectionBlock = styled.section`
  padding: 5em;
  @media all and (max-width: 710px) {
    padding: 0;
    padding-top: 5em;
  }
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 760px;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 0 1px 1px rgb(195, 195, 195);
  @media all and (max-width: 940px) {
    width: 550px;
  }
  @media all and (max-width: 710px) {
    width: 95%;
  }
  ul {
    display: flex;
    justify-content: space-around;

    li {
      width: 150px;
      margin: 1em 0;
      @media all and (max-width: 940px) {
        width: 100px;
      }
      @media all and (max-width: 480px) {
        width: 95px;
        font-size: 14px;
        line-height: 34px;
      }
    }
    input {
      margin: 1em 0;
      width: 330px;
      padding: 0.8em 1em;
      border: none;
      outline: none;
      border: 1px solid rgb(195, 195, 195);
      border-radius: 12px;
      @media all and (max-width: 940px) {
        width: 230px;
      }
      @media all and (max-width: 480px) {
        width: 165px;
      }
    }
  }
  .research {
    margin-top: 2em;
    @media all and (max-width: 480px) {
      font-size: 12px;
    }
  }
  .checkbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    label {
      margin: 1em 0;
      font-size: 14px;
      input[type="checkbox" i] {
        position: relative;
        top: 3px;
      }
    }
  }
  textarea {
    padding: 1em;
    margin-bottom: 1em;
    width: 240px;
  }
  input:last-child {
  }
`;

const Btn = styled.input`
  all: unset;
  width: 250px;
  height: 40px;
  text-align: center;
  box-shadow: 0 1px 2px 3px #ecf0f1;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export default function Register({ onLogged }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SectionBlock>
        <RegisterForm onSubmit={onSubmit}>
          <br></br>
          <h2>아이디/비밀번호</h2>
          <br></br>
          <ul>
            <li>이메일</li>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="이메일 입력"
            />
          </ul>
          <ul>
            <li>비밀번호</li>
            <input
              type="password"
              name="password"
              placeholder="영문, 숫자 또는 특수문자 포함 8~20자"
            />
          </ul>
          <ul>
            <li>비밀번호 확인</li>
            <input
              type="password"
              name="password2"
              placeholder="비밀번호 확인"
            />
          </ul>
          <br></br>
          <h2>회원정보 입력</h2>
          <br></br>
          <ul>
            <li>이름</li>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="이름 입력"
            />
          </ul>
          <li>**주소/은행계좌 추가 예정**</li>
          <div className="research">
            <hr></hr>
            <br></br>
            <p>가입을 하시게 된 계기를 말씀해주실 수 있나요?</p>
          </div>
          <div className="checkbox">
            <label htmlFor="1">
              <input type="checkbox" id="1" />
              일자리를 찾거나 직원을 구해요.
            </label>
            <label htmlFor="2">
              <input type="checkbox" id="2" />
              일자리를 찾거나 직원을 구해요.
            </label>
            <label htmlFor="3">
              <input type="checkbox" id="3" />
              일자리를 찾거나 직원을 구해요.
            </label>
            <div>
              <textarea
                autoComplete="off"
                placeholder="또는 기타 사항을 적어주세요."
                name="research"
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <Btn type="submit" onClick={onLogged} value="확인" />
          <br></br>
          <br></br>
        </RegisterForm>
      </SectionBlock>
    </>
  );
}
