import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

const Test = () => {
  const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://fitnesszone-server.vercel.app/review')
            .then(response => response.json())
            .then(data => {
             
              setReview(data)
            })
    }, [])
    return (
        <>
        <div className='text-center flex py-10'>
            <h1 className='pl-3 items-center  text-4xl'> <b>TESTIMONIAL</b></h1>
          </div>
        <Swiper 
        style={{width:'100%'}}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review.map(review =>
          
        <SwiperSlide><div className="p-10 text-center">
          <p className="text-base">{review.review}</p>
          <h2 className="text-lg">{review.name}</h2>
          </div></SwiperSlide>
          )}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </>
    );
};

export default Test;