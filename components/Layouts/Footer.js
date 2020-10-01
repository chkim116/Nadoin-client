import styled from "styled-components";

const FooterBlock = styled.footer`
  width: 100%;
  padding: 2em;
  min-height: 210px;
  text-align: center;
  position: relative;
  background: white;
  &::after {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 1px;
    background: rgb(195, 195, 195);
    content: "";
  }
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
      <FooterBlock>
        <br></br>
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
      </FooterBlock>
    </>
  );
}
