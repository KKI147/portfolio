import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5feff;
`;

export const Wrapper = styled.div`
  padding: 50px 20%;

  @media screen and (max-width: 1280px) {
    padding: 48px 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 46px 10%;
  }
  @media screen and (max-width: 480px) {
    padding: 44px 8%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 48px;
  @media screen and (max-width: 1280px) {
    font-size: 46px;
  }
  @media screen and (max-width: 768px) {
    font-size: 44px;
  }
  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
  & div {
    font-size: 18px;
    word-break: keep-all;
    padding: 4px 20px;
    color: #808080;
  }
  @media screen and (max-width: 1280px) {
    margin: 18px auto;
    & div {
      font-size: 16px;
      word-break: keep-all;
      padding: 3px 16px;
    }
    & img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 16px auto;
    & div {
      font-size: 14px;
      word-break: keep-all;
      padding: 2px 16px;
    }
    & img {
      width: 45px;
      height: 45px;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 14px auto;
    & div {
      font-size: 12px;
      word-break: keep-all;
      padding: 2px 14px;
    }
    & img {
      width: 40px;
      height: 40px;
    }
  }
`;
