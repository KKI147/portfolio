import styled from "styled-components";
//1280px, 768px, 480px
import Slider from "react-slick";

export const ImgComponent = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 12px;
  box-shadow: 5px 0 5px 0 #d3d3d3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1280px) {
    width: 100%;
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
  font-size: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const StyledSlider = styled(Slider)`
  /* 전체 */
  width: 65rem;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  /* slide 하나*/
  .slick-list {
  }

  .slick-prev {
    left: 0%;
    text-align: right;
    width: 44%;
    top: 105.5%;
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
    top: 105.5%;
  }
  .slick-next::before {
    position: absolute;
    content: ">";
    color: black;
    font-size: 36px;
    cursor: pointer;
  }
`;
