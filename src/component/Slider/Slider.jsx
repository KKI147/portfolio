import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Section,
  Wrapper,
  Title,
  ImgComponent,
  ImgBox,
  Hover,
  HoverBox,
} from "../Project/Project.styled";
import { StyledSlider, Next, Prev } from "./Slider.styled";

export default function SimpleSlider({ modalOpen }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: <Prev>{"<"}</Prev>,
    // nextArrow: <Next>{">"}</Next>,
  };
  return (
    <>
      <StyledSlider {...settings}>
        <HoverBox onClick={() => modalOpen("vongole")}>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
          <Hover>
            <div>Vongole</div>
          </Hover>
        </HoverBox>
        <HoverBox onClick={() => modalOpen("velog")}>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
          <Hover>
            <div>Velog</div>
          </Hover>
        </HoverBox>
        <HoverBox onClick={() => modalOpen("velly")}>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
          <Hover>
            <div>Vall of race</div>
          </Hover>
        </HoverBox>
        <HoverBox onClick={() => modalOpen("todo")}>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
          <Hover>
            <div>My todo</div>
          </Hover>
        </HoverBox>
        <HoverBox onClick={() => modalOpen("portfolio")}>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/pote.PNG"} />
          <Hover>
            <div>Portfolio</div>
          </Hover>
        </HoverBox>
      </StyledSlider>
    </>
  );
}
