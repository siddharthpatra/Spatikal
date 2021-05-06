import React, { lazy, Suspense } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "../../resources/css/carousel.css";
const Card = lazy(() => import("./card"));

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const Slider = (props) => {
  const card = (props) => {
    return props.article.map((article, index) => (
      <SwiperSlide key={index}>
        <Suspense fallback={<div></div>}>
          <Card key={index} data={article} />
        </Suspense>
      </SwiperSlide>
    ));
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper desktopOnly"
      >
        {card(props)}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{ clickable: true }}
        navigation={false}
        className="mySwiper mobileOnly"
      >
        {card(props)}
      </Swiper>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{ clickable: true }}
        navigation={false}
        className="mySwiper tabOnly"
      >
        {card(props)}
      </Swiper>
    </>
  );
};

export default Slider;
