import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("../../img/about_bg.svg");
`;

export const Wrapper = styled.div`
  padding-top: 100px;
  margin: 0 20% 0 20%;
  @media screen and (max-width: 1280px) {
    padding-top: 100px;
    margin: 0 20% 0 30%;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    margin: 0 20% 0 30%;
  }
  @media screen and (max-width: 480px) {
    padding-top: 100px;
    margin: 0 20% 0 20%;
  }
`;

export const EducationList = styled.div`
  line-height: 30px;
  @media screen and (max-width: 480px) {
    word-break: keep-all;
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
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  padding-left: 20px;
  margin-bottom: 1.5rem;
  color: #808080;
  font-size: 18px;
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
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
