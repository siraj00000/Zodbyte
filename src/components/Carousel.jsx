import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/component.css";
import Casestudy from "./Casestudy";
import { CAROUSEL_DATA } from "../Data/InputData";
import { SwiperNavButtons } from "./SwiperNavButtons";

import { A11y, Navigation, Pagination } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper
        modules={[A11y, Navigation, Pagination]}
        className="mySwiper relative"
      >
        {CAROUSEL_DATA.map((input, index) => (
          <SwiperSlide>
            <Casestudy key={index} {...input} className="" />
            <SwiperNavButtons />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
