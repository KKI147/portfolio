import styled from "styled-components";
//1280px, 768px, 480px
import Slider from "react-slick";

export const ImgBox = styled.div``;
export const HoverBox = styled.div``;
export const ImgComponent = styled.img`
  width: 500px;
  height: 500px;
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
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      transform: translate(-50%, -40px);
    }
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    margin: 0 30px;
  }
  .slick-list {
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    margin: 0 -30px;
  }
  .slick-track {
    width: 7000px !important;
  }

  .slick-prev {
    display: none;
  }
  .slick-next {
    display: none;
  }
  .slick-next {
    position: absolute;
    float: right;
    top: 50%;

    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
  .slick-next::before {
    color: black;
    font-size: 50px;
  }
  .slick-prev {
    position: absolute;
    float: left;
    top: 50%;

    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
  .slick-prev::before {
    color: black;
    font-size: 50px;
  }
`;
