import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: whitesmoke;
`;

export const Title = styled.div`
  width: 100px;
  text-align: center;
  background-color: gray;
  border-radius: 12px;
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: bold;
`;

export const ImgComponent = styled.img`
  width: 300px;
  height: 200px;
  border: outset;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImgBox = styled.div`
  display: flex;
  gap: 100px;
`;

export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
`;
