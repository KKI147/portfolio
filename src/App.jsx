import { useState } from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Project from "./component/Project/Project";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

function App() {
  const [swiper, setSwiper] = useState(Swiper);

  return (
    <>
      <Header swiper={swiper} />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        navigation={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Skill />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
