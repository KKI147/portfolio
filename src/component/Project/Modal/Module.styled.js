import styled from "styled-components";

export const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 5;
`;

export const Content = styled.div`
  width: 1080px;
  height: 600px;
  padding: 24px 36px;
  border-radius: 12px;
  z-index: 5;
  background-color: #f5f5f5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1280px) {
    width: 80%;
    height: fit-content;
    padding: 20px 32px;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 1280px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ModalBtn = styled.div`
  font-size: 24px;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  align-items: center;
  margin: 30px 0px;
  line-height: 30px;
  @media screen and (max-width: 1280px) {
    margin: 25px 0px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    line-height: 26px;
  }
`;

export const SubTitle = styled.div`
  font-size: 24px;
  margin: 10px 0px;
  font-weight: bold;
  @media screen and (max-width: 1280px) {
    font-size: 22px;
    margin: 8px 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Stack = styled.div`
  border-radius: 24px;
  background-color: #d3d3d3;
  padding: 2px 16px;
  margin: 5px 5px;
  font-size: 18px;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    padding: 2px 14px;
    margin: 4px 4px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Text = styled.div`
  color: #808080;
  & div {
    line-height: 30px;
  }
  @media screen and (max-width: 1280px) {
    line-height: 28px;
    word-break: keep-all;
  }
  @media screen and (max-width: 768px) {
    line-height: 26px;
    word-break: keep-all;
  }
  @media screen and (max-width: 480px) {
    line-height: 24px;
    word-break: keep-all;
  }
`;
