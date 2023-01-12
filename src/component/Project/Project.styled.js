import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: #f5f5f5;
  align-items: center;
`;

export const Title = styled.h2`
  position: relative;
  top: 5%;
  font-size: 50px;
  display: flex;
  justify-content: center;
`;

export const ImgComponent = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  box-shadow: 5px 5px 5px 5px #d3d3d3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  gap: 100px;
`;

export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  & h3 {
    width: 300px;
  }
  & h4 {
    width: 300px;
  }
  & li {
    line-height: 2rem;
  }
`;
