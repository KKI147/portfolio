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
  & div {
    cursor: pointer;
    font-size: large;
  }
  & div:hover {
    /* transform: translateY(-20%);
    transition: all 0.7s; */
    color: #cbc3e3;
  }
`;

export default Header;
