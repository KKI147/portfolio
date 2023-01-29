import styled from "styled-components";
import Slider from "react-slick";

export const Vongole = styled.div`
  width: 30rem !important;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../img/vongole.PNG");
  @media screen and (max-width: 1280px) {
    width: 100% !important;
    height: 450px;
  }
`;

export const Velog = styled.div`
  width: 30rem !important;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../img/velog.PNG");
  @media screen and (max-width: 1280px) {
    width: 100% !important;
    height: 450px;
  }
`;

export const Velly = styled.div`
  width: 30rem !important;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../img/velly.PNG");
  @media screen and (max-width: 1280px) {
    width: 100% !important;
    height: 450px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Todo = styled.div`
  width: 30rem !important;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../img/todo.PNG");
  @media screen and (max-width: 1280px) {
    width: 100% !important;
    height: 450px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Pote = styled.div`
  width: 30rem !important;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../img/pote.PNG");
  @media screen and (max-width: 1280px) {
    width: 100% !important;
    height: 450px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Hover = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0%;
  width: 30rem;
  height: 30rem;
  border-radius: 12px;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    width: 70vw;
    height: 450px;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
  @media screen and (max-width: 480px) {
    width: 90vw;
  }
`;

export const Title = styled.div`
  color: #181818;
  position: relative;
  padding: 12px 28px;
  background-color: #fff;
  border-radius: 50px;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -40px);
  }
  font-size: 28px;
  @media screen and (max-width: 1280px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 65rem;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  .slick-prev {
    left: 0%;
    text-align: right;
    width: 44%;
    top: 110.5%;
    margin-right: 6.5%;
  }
  .slick-prev::before {
    position: absolute;
    content: "<";
    color: black;
    font-size: 36px;
    cursor: pointer;
  }
  .slick-next {
    right: 0%;
    text-align: left;
    width: 50.5%;
    top: 110.5%;
  }
  .slick-next::before {
    position: absolute;
    content: ">";
    color: black;
    font-size: 36px;
    cursor: pointer;
  }
`;
