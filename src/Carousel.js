import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Card from './Card.js';
import CardCarousel from './CardCarousel.js';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function BootstrapCarousel({ frontpageNews }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        id="main"
        autoplay={{
          delay: '3000'
        }}
        pagination= {{clickable: true}}
        loop={true}
        tag='section'
        navigation 
        grabCursor={true}
        wrapperTag='ul' 
        thumbs={{ swiper: thumbsSwiper }}
      >

        <SwiperSlide tag='li'>
          <CardCarousel
            classSuffix='slide'
            title={frontpageNews[0].title}
            ss={frontpageNews[0].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[0].imgURL}
            id = {frontpageNews[0]._id}
            position = {frontpageNews[0].position}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            classSuffix='slide'
            title={frontpageNews[1].title}
            ss={frontpageNews[1].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[1].imgURL}
            id = {frontpageNews[1]._id}
            position = {frontpageNews[1].position}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            classSuffix='slide'
            title={frontpageNews[2].title}
            ss={frontpageNews[2].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[2].imgURL}
            id = {frontpageNews[2]._id}
            position = {frontpageNews[2].position}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            classSuffix='slide'
            title={frontpageNews[3].title}
            ss={frontpageNews[3].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[3].imgURL}
            id = {frontpageNews[3]._id}
            position = {frontpageNews[3].position}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            classSuffix='slide'
            title={frontpageNews[4].title}
            paragraphs={frontpageNews[4].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[4].imgURL}
            id = {frontpageNews[4]._id}
            position = {frontpageNews[4].position}
          />
        </SwiperSlide>

      </Swiper>

      {/* { <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={1}>
        <SwiperSlide tag='li'><img src={frontpageNews[0].imgURL} className="imgThumb"></img></SwiperSlide>
        <SwiperSlide tag='li'><img src={frontpageNews[1].imgURL} className="imgThumb"></img></SwiperSlide>
        <SwiperSlide tag='li'><img src={frontpageNews[2].imgURL} className="imgThumb"></img></SwiperSlide>
        <SwiperSlide tag='li'><img src={frontpageNews[3].imgURL} className="imgThumb"></img></SwiperSlide>
        <SwiperSlide tag='li'><img src={frontpageNews[4].imgURL} className="imgThumb"></img></SwiperSlide>
      </Swiper> } */}
    </>
  )
}