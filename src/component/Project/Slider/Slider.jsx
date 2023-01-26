// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  HoverBox,
  ImgComponent,
  Hover,
  ImgBox,
} from "./Slider.styled";

export default function SimpleSlider({ modalOpen }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,

    // responsive: [
    //   // 반응형 웹 구현 옵션
    //   {
    //     breakpoint: 960, //화면 사이즈 960px
    //     settings: {
    //       //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768, //화면 사이즈 768px
    //     settings: {
    //       //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <StyledSlider {...settings}>
        <ImgBox>
          <HoverBox>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
            <Hover>
              <div onClick={() => modalOpen("vongole")}>Vongole</div>
            </Hover>
          </HoverBox>
        </ImgBox>
        <ImgBox>
          <HoverBox>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
            <Hover>
              <div onClick={() => modalOpen("velog")}>Velog</div>
            </Hover>
          </HoverBox>
        </ImgBox>
        <HoverBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
          <Hover>
            <div onClick={() => modalOpen("velly")}>Vall of race</div>
          </Hover>
        </HoverBox>
        <HoverBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
          <Hover>
            <div onClick={() => modalOpen("todo")}>My todo</div>
          </Hover>
        </HoverBox>
        <HoverBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/pote.PNG"} />
          <Hover>
            <div onClick={() => modalOpen("portfolio")}>Portfolio</div>
          </Hover>
        </HoverBox>
      </StyledSlider>
    </>
  );
}
