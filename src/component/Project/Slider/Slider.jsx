// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider, ImgComponent, Hover, Title } from "./Slider.styled";

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
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
          <Hover>
            <Title onClick={() => modalOpen("vongole")}>Vongole</Title>
          </Hover>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
          <Hover>
            <Title onClick={() => modalOpen("velog")}>Velog</Title>
          </Hover>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
          <Hover>
            <Title onClick={() => modalOpen("velly")}>Vall of race</Title>
          </Hover>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
          <Hover>
            <Title onClick={() => modalOpen("todo")}>My todo</Title>
          </Hover>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/pote.PNG"} />
          <Hover>
            <Title onClick={() => modalOpen("portfolio")}>Portfolio</Title>
          </Hover>
        </div>
      </StyledSlider>
    </div>
  );
}
