import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
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
