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
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 10%);
  padding: 0 5%;

  @media screen and (max-width: 1280px) {
    justify-content: space-between;

    width: calc(100% - 30%);
    padding: 0 15%;
    & div {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: calc(100% - 20%);
    padding: 0 10%;
    & div {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    justify-content: space-between;
    width: calc(100% - 16%);
    padding: 0 8%;
    & div {
      font-size: 16px;
    }
  }
  & div {
    cursor: pointer;
    font-size: 24px;
  }
  & div:hover {
    color: #666b6c;
  }
`;
