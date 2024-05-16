import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectCube, EffectFade, EffectCoverflow} from 'swiper/modules';
import EffectCarousel from './carousel-slider/dist/effect-carousel.esm.js';
import EffectPanorama from './panorama-slider/dist/effect-panorama.esm.js';

import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/recommend.css';
import './style/typography/recommend.css';
import 'swiper/css/bundle';

export default function Recommend() {

    const {frontpageNews} = useContext(context);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return ( <div className='recommend'>
              <div className='recommend-label'>Preporučujemo</div>
              <Swiper
                    modules={[Navigation, Autoplay,EffectCube, EffectFade, EffectCoverflow, EffectPanorama, EffectCarousel]}
                    id="main"
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={'3'}
                    speed={1500}
                    /* pagination= {{clickable: true}} */
                    loop={true}
                    tag='section'
                    /* navigation */
                    grabCursor={true}
                    wrapperTag='ul' 
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {frontpageNews.map((article, i) => {
                        if((i < 7) || (i > 12)) return
                        return <SwiperSlide tag='li' key = {i}>
                                <Card  
                                    key = {i}
                                    path = {`/article/${article._id}`}
                                    classSuffix = 'recommend'
                                    id = {article._id}
                                    src = {article.imgURL}
                                    videoURL = {article.videoURL}
                                    filter = {article.imgFilter}
                                    category = {article.category}
                                    datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                    title = {article.title}
                                    thumbShape = 'wide'
                                    readMore={false}
                                />
                            </SwiperSlide>
                    })}
  
                </Swiper>
            </div>
    )
}