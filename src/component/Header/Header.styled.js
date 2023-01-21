import styled from "styled-components";
//1280px, 768px, 480px

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #212121;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 100px;
  z-index: 2;
  @media screen and (max-width: 1280px) {
    padding: 10px 10px;
    height: 64px;
    gap: 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 10px;
    height: 64px;
    gap: 50px;
  }

  @media screen and (max-width: 480px) {
    height: 64px;
    gap: 20px;
  }
  & div {
    cursor: pointer;
    font-size: 2rem;
  }
  & div:hover {
    color: #cbc3e3;
  }
`;

export default Header;
