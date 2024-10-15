import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "globals.css";

export default function Carousel() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide className="mx-auto ">
          <div className="absolute left-[200px] bottom-3">
            <p className="text-lg mb-4">Wild Flower Hoodie</p>
            <p className=" text-4xl font-bold">120’000₮</p>
          </div>
          <img src="/assets/herotop.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
