import styled from "styled-components";

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 100px;
  z-index: 2;
  & div {
    cursor: pointer;
    font-size: large;
  }
`;

export default Header;
