import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function BootstrapCarousel({frontpageNews}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
          <>
          <Swiper  
            id = "main" 
            autoplay = {{
            delay: '3000'
            }}
            loop = {true} 
            tag = 'section'
            grabCursor = {true} 
            wrapperTag = 'ul' 
            navigation
            thumbs = {{swiper: thumbsSwiper}}>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[0].imgURL} className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[1].imgURL} className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[2].imgURL} className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[3].imgURL} className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[4].imgURL} className = "imgSlide"></img></SwiperSlide>
          </Swiper>
          
          <Swiper 
            id = "thumbs" 
            onSwiper = {setThumbsSwiper}
            slidesPerView = {5} 
            spaceBetween = {1}>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[0].imgURL} className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[1].imgURL} className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[2].imgURL} className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[3].imgURL} className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = {frontpageNews[4].imgURL} className = "imgThumb"></img></SwiperSlide>
          </Swiper>
          </>
        )
}