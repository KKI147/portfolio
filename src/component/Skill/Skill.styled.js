import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5feff;
`;

export const Wrapper = styled.div`
  padding: 100px 20%;
  @media screen and (max-width: 1280px) {
    padding: 100px 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 10%;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 8%;
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
  margin: 1.5rem auto;
  & div {
    font-size: 20px;
    word-break: keep-all;
    padding: 5px 20px;
    color: #808080;
  }
  @media screen and (max-width: 1280px) {
    margin: 15px auto;
    & div {
      font-size: 18px;
      word-break: keep-all;
    }
    & img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 15px auto;
    & div {
      padding: 5px 10px;
      font-size: 16px;
    }
    & img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 15px auto;
    & div {
      padding: 5px 10px;
      font-size: 14px;
    }
    & img {
      width: 50px;
      height: 50px;
    }
  }
`;
