import styled from "styled-components";

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
    gap: 20px;
    padding: 10px 10px;
    height: fit-content;
  }
  & div {
    cursor: pointer;
    font-size: large;
  }
  & div:hover {
    color: #cbc3e3;
  }
`;

export default Header;
