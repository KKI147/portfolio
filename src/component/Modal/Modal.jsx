import ReactDOM from "react-dom";
import { useState } from "react";
import {
  Content,
  Stack,
  Box,
  SubTitle,
  StackBox,
  ModalBox,
  Text,
  ModalTitle,
  ModalBtn,
  ModalHead,
} from "../Modal/Modal.syled";

// const modalStyle = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "600px",
//   maxWidth: "100%",
//   height: "400px",
//   maxHeight: "100%",
//   backgroundColor: "lightYellow",
//   zIndex: "999",
// };

// const overlayStyle = {
//   position: "fixed",
//   top: "0",
//   left: "0",
//   height: "100%",
//   width: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.8)",

//   zIndex: "888",
// };

const Modal = ({ children, modalOpen, type, Name }) => {
  return ReactDOM.createPortal(
    <ModalBox>
      <Content>
        <ModalHead>
          <ModalTitle>{Name[0]}</ModalTitle>
          <ModalBtn onClick={() => modalOpen(false)}>X</ModalBtn>
        </ModalHead>
        <Box>
          <SubTitle>Stack</SubTitle>
          <StackBox>
            {/* <Stack>HTML5</Stack>
                <Stack>CSS3</Stack>
                <Stack>JavaScript</Stack>
                <Stack>ReactJS</Stack>
                <Stack>React-Router</Stack>
                <Stack>Redux-Thunk</Stack>
                <Stack>styled-components</Stack>
                <Stack>Axios</Stack> */}
          </StackBox>
        </Box>
        <Box>
          <SubTitle>Role</SubTitle>
          {/* <Text>- Front-end</Text> */}
        </Box>
        <Box>
          <SubTitle>Description</SubTitle>
          {/* <Text>- 봉사활동 매칭 서비스</Text> */}
        </Box>
        <SubTitle>Tec</SubTitle>
        <Text>
          {/* <div>- Axios를 통한 게시판 댓글 CRUD 기능 구현</div>
              <div>
                - Kakao Map API를 통해 우편주소값을 통한 Kakao Map 특정지역
                Marker 표기 개발
              </div>
              <div>
                - React-Calendar를 사용한 달력 구현, BE 통신 후 월별 봉사일정 및
                개인 봉사일정 Calendar 표기 구현
              </div>
              <div>- Fimga Design File {">"} HTML, CSS Publishing</div> */}
        </Text>
      </Content>
    </ModalBox>,
    document.getElementById("modal")
  );
};

export default Modal;
