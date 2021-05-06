import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "../../resources/css/carousel.css";
import Card from "./card";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const Slider = (props) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={false}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper"
    >
      {props.article.map((article, index) => (
        <SwiperSlide key={index}>
          <Card key={index} data={article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
