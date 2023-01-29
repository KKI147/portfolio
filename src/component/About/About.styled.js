import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("../../img/about_bg.svg");
`;

export const Wrapper = styled.div`
  padding: 74px 20%;

  @media screen and (max-width: 1280px) {
    padding: 68px 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 64px 10%;
  }
  @media screen and (max-width: 480px) {
    padding: 56px 8%;
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

export const Content = styled.div`
  padding-left: 20px;
  margin-bottom: 1.5rem;
  color: #808080;
  font-size: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Tag = styled.div`
  margin-bottom: 1rem;
  font-size: 25px;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const EducationList = styled.div`
  line-height: 30px;
  @media screen and (max-width: 768px) {
    word-break: keep-all;
  }
  @media screen and (max-width: 480px) {
    word-break: keep-all;
  }
`;
