import styled from "styled-components";

const Footers = styled.footer`
  width: 100%;
  padding: 2em;
  min-height: 210px;
  text-align: center;
  ul {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 0.8em;
    li {
      margin-right: 1em;
      cursor: pointer;
    }
  }
`;

const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <Footers>
        <ul>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>고객센터</li>
        </ul>
        <div>
          <small>&copy;{Year} taek&kim </small>
        </div>
        <div>
          <small>(주)택김 컴퍼니 | 경기도 성남시 분당구 서현로</small>
        </div>
      </Footers>
    </>
  );
}
