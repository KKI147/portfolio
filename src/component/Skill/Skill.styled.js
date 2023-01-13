import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5feff;
  display: flex;
  justify-content: center;
  & div {
    margin-top: 5rem;
  }
`;

export const Title = styled.h2`
  width: 100px;
  text-align: center;
  margin-bottom: 10rem;
  font-size: 50px;
`;

export const SkillComponent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
