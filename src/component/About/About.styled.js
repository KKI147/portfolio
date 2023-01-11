import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: whitesmoke;
`;

export const ImgComponent = styled.img`
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wraper = styled.span`
  margin: 30px 30px;
`;
export const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 100px;
`;

export const Name = styled.div`
  background-color: gray;
  border-radius: 12px;
  width: 150px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Content = styled.div`
  text-align: center;
  background-color: gray;
  border-radius: 12px;
  width: 150px;
`;
