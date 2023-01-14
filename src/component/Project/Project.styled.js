import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  margin: 64px 360px 0 360px;
`;

export const Title = styled.h2`
  margin-bottom: 5rem;
  font-size: 50px;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  margin-bottom: 2rem;
  height: 300px;
`;

export const HoverBox = styled.span`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;
export const ImgComponent = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  box-shadow: 5px 5px 5px 5px #d3d3d3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
`;

export const Hover = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  z-index: 1;
  & div {
    color: #181818;
    position: relative;
    padding: 12px 28px;
    background-color: #fff;
    border-radius: 50px;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  /* & button {
    position: absolute;
    top: 0%;
    right: 0%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 24px;
  } */
`;

export const Box = styled.div`
  align-items: center;
  margin: 30px 0px;
  line-height: 30px;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  /* margin-right: 1rem;
  margin-bottom: 1rem; */
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

export const TecBox = styled.div`
  /* display: flex; */
  /* margin: 15px 15px; */
`;

export const TecTitle = styled.div`
  /* display: flex; */
  font-size: 24px;
  /* margin-right: 1rem;
  margin-bottom: 1rem; */
  font-weight: bold;
`;

export const Text = styled.div`
  color: #8888;
  & div {
    line-height: 30px;
  }
`;
