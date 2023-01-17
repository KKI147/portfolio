import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("../../img/about_bg.svg");
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  margin: 64px 360px 0 360px;
`;

export const EducationList = styled.div`
  line-height: 30px;
`;
export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 50px;
`;

export const Content = styled.div`
  padding-left: 20px;
  margin-bottom: 2rem;
  color: #808080;
`;

export const Tag = styled.div`
  font-size: 24px;
  margin-bottom: 1rem;
`;
