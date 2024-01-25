import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
const SwiperComponent = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper font-IstokWeb "
      >
        <SwiperSlide className="bg-cover ">
          <img
            className=" rounded-3xl "
            src="https://i.pinimg.com/564x/92/53/65/925365ee60dcc09ab0ac03fb51a4b4cc.jpg"
          />
          <p className="absolute top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#b24e5b] to-[#535353] bg-clip-text text-transparent text-[5rem] z-[34] font-[900] ">
            Challenges
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-3xl "
            src=" https://i.pinimg.com/736x/29/55/5d/29555daeb3032982e15102deedfbac27.jpg"
          />
          <p className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#e69f72] to-[#62adca] bg-clip-text text-transparent text-[5rem] z-[34] font-[900] ">
            Quizzes
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-4xl aspect-square"
            src="https://i.pinimg.com/564x/a9/b1/7f/a9b17fab4f19487fb3119aa021939e47.jpg"
          />
          <p className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#474a40] to-[#8da16c] bg-clip-text text-transparent text-[3rem] z-[34] font-[900]">
            Side Quest
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-3xl "
            src="https://i.pinimg.com/736x/cf/de/73/cfde7398f2404ea1caefd5d657901182.jpg"
          />
          <p className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ffff] to-[#ffb35b] bg-clip-text text-transparent text-[3rem] text-center w-full  z-[34] font-[900]">
            Realistic Simulations
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img  
            className=" rounded-3xl "
            src="https://i.pinimg.com/564x/c7/c9/8f/c7c98f02f5d3b203d5ce6a95b52c3352.jpg"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#fb9f68] to-[#fff] bg-clip-text text-transparent text-[3rem] text-center w-full  z-[34] font-[900]">
            Community
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
