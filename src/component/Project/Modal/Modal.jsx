import ReactDOM from "react-dom";
import { Content, ModalBox } from "./Module.styled";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalBox>
      <Content>{children}</Content>
    </ModalBox>,

    document.querySelector("#modal")
  );
};

export default Modal;
