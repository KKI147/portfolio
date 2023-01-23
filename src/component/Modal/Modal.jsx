import ReactDOM from "react-dom";
import {} from "./Modul.styled";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.querySelector("#modal"));
};

export default Modal;
