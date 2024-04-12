import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay, EffectCube} from 'swiper';
import Card from './Card.js';
import CardCarousel from './CardCarousel.js';
import 'swiper/swiper-bundle.css';
import './style/layout/carousel.css';
import './style/typography/carousel.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function BootstrapCarousel({ frontpageNews }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='carousel'>
      <Swiper
        id="main"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1500}
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
            
            title={frontpageNews[0].title}
            paragraphs={frontpageNews[0].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[0].imgURL}
            filter = {frontpageNews[0].imgFilter}
            id = {frontpageNews[0]._id}
            position = {frontpageNews[0].position}
            videoURL = {frontpageNews[0].videoURL}
            category = {frontpageNews[0].category}
        
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            
            title={frontpageNews[1].title}
            paragraphs={frontpageNews[1].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[1].imgURL}
            filter = {frontpageNews[1].imgFilter}
            id = {frontpageNews[1]._id}
            position = {frontpageNews[1].position}
            videoURL = {frontpageNews[1].videoURL}
            category = {frontpageNews[1].category}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            
            title={frontpageNews[2].title}
            paragraphs={frontpageNews[2].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[2].imgURL}
            filter = {frontpageNews[2].imgFilter}
            id = {frontpageNews[2]._id}
            position = {frontpageNews[2].position}
            videoURL = {frontpageNews[2].videoURL}
            category = {frontpageNews[2].category}
          />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <CardCarousel
            
            title={frontpageNews[3].title}
            paragraphs ={frontpageNews[3].text}
            // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            src={frontpageNews[3].imgURL}
            filter = {frontpageNews[3].imgFilter}
            id = {frontpageNews[3]._id}
            position = {frontpageNews[3].position}
            videoURL = {frontpageNews[3].videoURL}
            category = {frontpageNews[3].category}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}