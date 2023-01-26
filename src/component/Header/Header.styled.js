import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 64px;
  background-color: #212121;
  color: #fff;
  position: fixed;
  z-index: 2;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: calc(100% - 10%);
  padding: 20px 5%;

  @media screen and (max-width: 1280px) {
    width: calc(100% - 2%);
    padding: 20px 1%;
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 5%);
    & div {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    width: calc(100% - 16%);
    padding: 20px 8%;
    & div {
      font-size: 16px;
    }
  }
  & div {
    cursor: pointer;
    font-size: 24px;
  }
  & div:hover {
    color: #cbc3e3;
  }
`;
