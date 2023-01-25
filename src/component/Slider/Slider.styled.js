import styled from "styled-components";
//1280px, 768px, 480px
import Slider from "react-slick";

// export const Prev = styled.button`
//   width: 200px;
//   height: 100px;
//   background-color: purple;
//   color: white;
// `;

// export const Next = styled.button`
//   width: 200px;
//   height: 100px;
//   background-color: purple;
//   color: white;
// `;
export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 500px;
    position: relative;
    left: 30%;
  }
  /* .slick-prev {
    width: 100px;
    height: 100px;
    color: black;
    background-color: transparent;
  }

  .slick-next {
    width: 100px;
    height: 100px;
    color: black;
    background-color: transparent;
  } */

  /* .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  } */

  /* .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 3.5px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  } */

  /* .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: black;
    background-color: black;
  } */

  /* .slick-dots li.slick-active button:before {
    color: white;
  } */

  /* li {
    margin: 0;
    padding: 0;
  } */
  .slick-prev,
  .slick-next {
    font-size: 50px;
    line-height: 0;
    position: absolute;
    top: 50%;
    /* display: block; */
    width: 50px;
    height: 50px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: black;
  }
  /* .slick-track {
    width: 500px;
    height: 500px;
  } */
`;
