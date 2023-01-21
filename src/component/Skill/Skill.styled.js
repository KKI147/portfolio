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
  @media screen and (max-width: 1550px) {
    margin: 64px 64px;
  }
  @media screen and (max-width: 1280px) {
    margin: 64px 64px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 50px;
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
      font-size: 18px;
    }
  }
`;
