import styled from "styled-components";

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #212121;
  color: #fff;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 2;

  & div {
    cursor: pointer;
    font-size: 25px;
    padding: 0px 50px;
  }
  & div:hover {
    color: #cbc3e3;
  }

  @media screen and (max-width: 1280px) {
    height: 70px;
    & div {
      font-size: 20px;
      padding: 0px 30px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 70px;
    & div {
      font-size: 18px;
      padding: 0px 30px;
    }
  }

  @media screen and (max-width: 480px) {
    height: 70px;
    & div {
      font-size: 16px;
      padding: 0px 20px;
    }
  }
`;

export default Header;
