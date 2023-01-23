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

const Modal = ({ children, modalOpen, type, Vongole, Vellog }) => {
  console.log(Vongole);
  console.log(Vellog);
  console.log(type);
  if (type === "vongole") {
    <ModalBox>
      <Content>
        <ModalHead>
          <ModalTitle>{Vongole.name}</ModalTitle>
          <ModalBtn onClick={() => modalOpen(false)}>X</ModalBtn>
        </ModalHead>
        <Box>
          <SubTitle>Stack</SubTitle>
          <StackBox>{Vongole.stack}</StackBox>
        </Box>
        <Box>
          <SubTitle>Role</SubTitle>- {Vongole.role}
        </Box>
        <Box>
          <SubTitle>Description</SubTitle>- {Vongole.descrition}
        </Box>
        <SubTitle>Tec</SubTitle>
        <Text>{Vongole.tec}</Text>
      </Content>
    </ModalBox>;
  } else if (type === "velog") {
    <ModalBox>
      <Content>
        <ModalHead>
          <ModalTitle>2</ModalTitle>
          <ModalBtn onClick={() => modalOpen(false)}>X</ModalBtn>
        </ModalHead>
        <Box>
          <SubTitle>Stack</SubTitle>
          <StackBox>{Vongole.stack}</StackBox>
        </Box>
        <Box>
          <SubTitle>Role</SubTitle>- {Vongole.role}
        </Box>
        <Box>
          <SubTitle>Description</SubTitle>- {Vongole.descrition}
        </Box>
        <SubTitle>Tec</SubTitle>
        <Text>{Vongole.tec}</Text>
      </Content>
    </ModalBox>;
  }
  return ReactDOM.createPortal(<></>, document.getElementById("modal"));
};

export default Modal;
