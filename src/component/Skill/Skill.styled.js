import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5feff;
`;

export const Wrapper = styled.div`
  margin: 64px 360px 0 360px;
  @media screen and (max-width: 1280px) {
    margin: 64px 250px 0 250px;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    margin: 64px 120px 0 200px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    margin: 64px 50px 0 50px;
    font-size: 25px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 50px;
  @media screen and (max-width: 1280px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem auto;
  & div {
    padding: 5px 20px;
    color: #808080;
  }
  @media screen and (max-width: 1280px) {
    margin: 15px auto;
    & div {
      padding: 5px 10px;
      font-size: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 15px auto;
    & div {
      padding: 5px 10px;
      font-size: 18px;
    }
    & img {
      width: 25px;
      height: 25px;
    }
  }
`;
