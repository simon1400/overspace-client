"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.scss";

import Image from "next/image";
import { FC } from "react";

const APP_API = process.env.APP_API

const Slider: FC<{data: any}> = ({data}) => {
  console.log()
  return (
    <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} className={styles.slider}>
      {data.map((item: any, idx: number) => <SwiperSlide key={idx} className={styles.slide}>
        <Image src={APP_API+item.attributes.url+"?format=webp&width=1400"} fill alt="" />
      </SwiperSlide>)}
    </Swiper>
  );
};

export default Slider;
