import React, { useState, useEffect, useContext } from 'react';
import {context} from './newsContext.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay, EffectCube} from 'swiper';
import dateFormat from './dateFormat.js';
import Card from './Card.js';
import CardCarousel from './CardCarousel.js';
import 'swiper/swiper-bundle.css';
import './style/layout/carousel.css';
import './style/typography/carousel.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function BootstrapCarousel() {
  const {frontpageNews} = useContext(context);
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
        {frontpageNews.map((article, i) => {
          if((i > 3)) return
          return  <SwiperSlide tag='li' key = {i}>
            <CardCarousel
              key = {i}
              path = {`/article/${frontpageNews[i]._id}`}
              title={frontpageNews[i].title}
              subtitle={frontpageNews[i].subtitle}
              src={frontpageNews[i].imgURL}
              filter = {frontpageNews[i].imgFilter}
              position = {frontpageNews[i].position}
              videoURL = {frontpageNews[i].videoURL}
              category = {frontpageNews[i].category}
              datePublished = {dateFormat(frontpageNews[i].datePublished, 'month', 'dayMonth','comma', 'clock')}
              dateUpdated = {dateFormat(frontpageNews[i].dateUpdated, 'clock')}
          
            />
        </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}