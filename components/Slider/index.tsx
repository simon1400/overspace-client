"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.scss";

import Image from "next/image";

const Slider = () => {
  return (
    <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} className={styles.slider}>
      <SwiperSlide className={styles.slide}>
        <Image src="/card.png" fill alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src="/card.png" fill alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src="/card.png" fill alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
