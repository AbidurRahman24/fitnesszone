import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider3 from '../../../assets/slider3.jpg'
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";


const HeroSlider = () => {
    return (
        <div className="pt-5">
        <Swiper 
        style={{width:'100%', }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper carousel-item relative w-full"
      >
        <SwiperSlide>
        <img src={slider3} className="w-full " />
        </SwiperSlide>
        <SwiperSlide> <img src={slider1} className="w-full" /></SwiperSlide>
        <SwiperSlide> <img src={slider2} className="w-full" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>  
        </div>
    );
};

export default HeroSlider;