import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  & div {
    margin-top: 5rem;
  }
`;

export const Title = styled.div`
  width: 100px;
  text-align: center;
  background-color: gray;
  border-radius: 12px;
  margin-bottom: 10rem;
  font-size: 24px;
  font-weight: bold;
`;

export const SkillComponent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
