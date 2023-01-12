import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: #f5f5f5;
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
