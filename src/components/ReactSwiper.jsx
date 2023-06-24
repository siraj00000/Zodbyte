import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { SOURCE_SRC } from "../Data/source_src";

const ReactSwiper = ({ numberOfSlides, slidesSpacing }) => {
  const swiper = useSwiper()
  React.useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // ... other options
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // ... other options
    });
  }, []);
  return (
    <div>
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectFade]}
      style={{
        "--swiper-navigation-color": "#fff",
      }}
      spaceBetween={slidesSpacing}
      slidesPerView={numberOfSlides}
      navigation
    >
      {SOURCE_SRC.map((item, index) => (
        

    
        <SwiperSlide key={index}>
          <div className="swiper-container">
          <img
            src={item}
            alt="slider.image"
            className="h-[220px] md:w-[350px] xl:w-[800px] max-md:w-full object-cover delay-75 cursor-pointer"
            
          />
           </div>
           
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ReactSwiper;
