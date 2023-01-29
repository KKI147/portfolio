import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  padding: 100px 20%;
  @media screen and (max-width: 1280px) {
    padding: 76px 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 66px 10%;
  }
  @media screen and (max-width: 480px) {
    padding: 56px 8%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 5rem;
  font-size: 48px;
  @media screen and (max-width: 1280px) {
    font-size: 46px;
  }
  @media screen and (max-width: 768px) {
    font-size: 44px;
  }
  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`;

export const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 5;
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ModalBtn = styled.div`
  font-size: 24px;
  cursor: pointer;
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
`;

export const Box = styled.div`
  align-items: center;
  margin: 30px 0px;
  line-height: 30px;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  margin: 10px 0px;
  font-weight: bold;
`;

export const Stack = styled.div`
  border-radius: 24px;
  background-color: #d3d3d3;
  padding: 2px 16px;
  margin: 5px 5px;
`;

export const StackBox = styled.div`
  display: flex;
`;

export const TecTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.div`
  color: #808080;
  & div {
    line-height: 30px;
  }
`;
