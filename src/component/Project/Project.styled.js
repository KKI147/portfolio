import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  margin: 64px 360px 0 360px;
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }
  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.borderBottom};
    border-radius: 6px;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 6px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 50px;
`;

export const ImgBox = styled.div`
  margin-bottom: 2rem;
  height: 300px;
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

export const Content = styled.span`
  width: 1000px;
  height: 200px;
  margin-left: 2rem;
  /* width: 300px; */

  /* justify-content: center; */

  & span {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-items: center;
    line-height: 30px;
  }
  /* & h3 {
    width: 300px;
  }
  & h4 {
    width: 300px;
  } */
  /* & li {
    line-height: 2rem;
  } */
`;
export const Stack = styled.span`
  width: max-content;
  border-radius: 24px;
  background-color: #d3d3d3;
  margin: 0px 5px;
  padding: 0px 2px;
`;
