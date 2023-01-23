import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("../../img/about_bg.svg");
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

export const EducationList = styled.div`
  line-height: 30px;
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

export const Content = styled.div`
  padding-left: 20px;
  margin-bottom: 2rem;
  color: #808080;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Tag = styled.div`
  font-size: 24px;
  margin-bottom: 1rem;
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
