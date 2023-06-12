import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/component.css"
import Casestudy from "./Casestudy";
import { CAROUSEL_DATA } from "../Data/InputData";

import { Autoplay, Navigation } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}
        className="mySwiper ">
        
        {CAROUSEL_DATA.map((input, index) => (
          <SwiperSlide>
          <Casestudy
          key={index}
          {...input}
          
          className=""/>
      </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Carousel
