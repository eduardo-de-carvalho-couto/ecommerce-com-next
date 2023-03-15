import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import styles from "./Banner.module.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
  return (
    
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      speed={ 750 }
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
    >
        <SwiperSlide>
            <img className={styles.slide} src="/img/banner-4.png" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={styles.slide} src="/img/banner-5.png" />
        </SwiperSlide>
    </Swiper>

  )
}
