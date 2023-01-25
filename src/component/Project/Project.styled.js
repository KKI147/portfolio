import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  padding-top: 100px;
  margin: 0 20% 0 20%;
  /* @media screen and (max-width: 1280px) {
    padding-top: 100px;
    margin: 0 10% 0 15%;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    margin: 0 5% 0 10%;
  }
  @media screen and (max-width: 480px) {
    padding-top: 100px;
    margin: 0 5% 0 10%;
  } */
`;

export const Title = styled.h2`
  margin-bottom: 5rem;
  font-size: 50px;
  /* @media screen and (max-width: 1280px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  } */
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  /* z-index: 55; */
  /* @media screen and (max-width: 1700px) {
    margin: 0px 120px;
    gap: 30px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0px 120px;
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px 120px;
    gap: 50px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px 120px;
    gap: 50px;
  } */
`;

export const HoverBox = styled.div`
  cursor: pointer;
  /* transition: all 0.5s ease;
  &:hover {
    transform: translateY(-1.5rem);
  } */
`;
export const ImgComponent = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  box-shadow: 5px 5px 5px 5px #d3d3d3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  /* @media screen and (max-width: 1700px) {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 1500px) {
    width: 300px;
    height: 150px;
  }
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 150px;
  }
  @media screen and (max-width: 900px) {
    width: 150px;
    height: 100px;
  } */
`;

export const Hover = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  width: 500px;
  height: 500px;
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
    /* @media screen and (max-width: 1800px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 12px;
    } */
  }

  /* @media screen and (max-width: 1800px) {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 1500px) {
    width: 300px;
    height: 150px;
  }
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 150px;
  }
  @media screen and (max-width: 900px) {
    width: 150px;
    height: 100px;
  } */
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
