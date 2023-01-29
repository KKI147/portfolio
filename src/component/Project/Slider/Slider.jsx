// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  Hover,
  Title,
  Vongole,
  Velog,
  Velly,
  Todo,
  Pote,
} from "./Slider.styled";

export default function Responsive({ modalOpen }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <Vongole>
          <Hover>
            <Title onClick={() => modalOpen("vongole")}>Vongole</Title>
          </Hover>
        </Vongole>
        <Velog>
          <Hover>
            <Title onClick={() => modalOpen("velog")}>Velog</Title>
          </Hover>
        </Velog>
        <Velly>
          <Hover>
            <Title onClick={() => modalOpen("velly")}>Vall of race</Title>
          </Hover>
        </Velly>
        <Todo>
          <Hover>
            <Title onClick={() => modalOpen("todo")}>My todo</Title>
          </Hover>
        </Todo>
        <Pote>
          <Hover>
            <Title onClick={() => modalOpen("portfolio")}>Portfolio</Title>
          </Hover>
        </Pote>
      </StyledSlider>
    </div>
  );
}
