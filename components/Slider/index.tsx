"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowR from "/public/arrow-r.svg";
import ArrowL from "/public/arrow-l.svg";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.scss";

import Image from "next/image";
import { FC } from "react";

const APP_API = process.env.APP_API;

const Slider: FC<{ data: any }> = ({ data }) => {
  console.log();
  return (
    <div className={styles.sliderWrap}>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        // @ts-ignore
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        className={styles.slider}
      >
        {data.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <Image
              src={APP_API + item.attributes.url + "?format=webp&width=1800"}
              fill
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.sliderNav}>
        <ArrowL id="swiper-back" aria-label="swiper-back" />
        <ArrowR id="swiper-forward" aria-label="swiper-forward" />
      </div>
    </div>
  );
};

export default Slider;
