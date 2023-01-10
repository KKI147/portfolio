import styled from "styled-components";

const FooterComponent = styled.footer`
  width: 100%;
  height: 64px;
  background-color: gray;
  color: white;
  bottom: 0%;
  position: absolute;
  & span {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 25px 10px;
  }

  & a {
    color: white;
  }
`;

export default FooterComponent;
