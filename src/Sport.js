import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectCube, EffectFade, EffectCoverflow} from 'swiper/modules';
import Card from './Card.js';
import { Link } from 'react-router-dom';
import EffectCarousel from './carousel-slider/dist/effect-carousel.esm.js';
import EffectPanorama from './panorama-slider/dist/effect-panorama.esm.js';
import SwiperGL from './shaders-slider/dist/swiper-gl.esm.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/sport.css';
import './style/typography/sport.css';
import 'swiper/css/bundle';

export default function Sport() {

    const {frontpageNews} = useContext(context);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='sport'>
            <div className='sport-header'>
                {/* <div className='sport-title'>sport</div> */}
          
                <img src = 'https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fsport1.png?alt=media&token=ac31ffde-2685-4271-93ad-53fca5bbccdd'></img>
              
            </div>
            <div className='sport-up'>
            <Card  
                        key = {9}
                        path = {`/article/${frontpageNews[9]._id}`}
                        classSuffix = 'sportBig'
                        id = {frontpageNews[9]._id}
                        src = {frontpageNews[9].imgURL}
                        videoURL = {frontpageNews[9].videoURL}
                        category = {frontpageNews[9].category}
                        filter = {frontpageNews[9].imgFilter}
                        title = {frontpageNews[9].title}
                        subtitle = {frontpageNews[9].subtitle}
                        thumbShape = 'wide'
                        readMore={true}
                        datePublished = {dateFormat(frontpageNews[9].datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(frontpageNews[9].dateUpdated,'clock')}
                        hasDateArrow={true}
                    />
            </div>
            <div className='sport-center'>
            <Swiper
                    modules={[Navigation, SwiperGL, Autoplay, EffectCube, EffectFade, EffectCoverflow, EffectPanorama, EffectCarousel]}
                    id="main"
                    effect="panorama"
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
                    slidesPerView={'4'}
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
                        if((i < 7) || (i > 14)) return
                        return <SwiperSlide tag='li' key = {i}>
                                <Card  
                                    key = {i}
                                    path = {`/article/${article._id}`}
                                    classSuffix = 'sportCenter'
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
            <div className='sport-down'>
                <div className='sport-down-center'>
                    {frontpageNews.map((article, i) => {
                        if((i < 11) || (i > 14)) return
                        return <Card  
                                key = {i}
                                path = {`/article/${article._id}`}
                                classSuffix = 'sport'
                                id = {article._id}
                                src = {article.imgURL}
                                videoURL = {article.videoURL}
                                category = {article.category}
                                
                                filter = {article.imgFilter}
                                title = {article.title}
                                thumbShape = 'wide'
                                readMore={false}
                            />
                    })}
                </div>
                <div className='sport-down-sidebar'>
                    {frontpageNews.map((article, i) => {
                        if((i < 9) || (i > 14)) return
                        return <Card  
                                
                                key = {i}
                                path = {`/articleTrending${i}/${article._id}`}
                                classSuffix={'latest'}
                                title={article.title}
                                videoURL={article.videoURL}
                                datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                                src={article.imgURL2}
                                category = {article.category}
                                filter = {article.imgFilter2} 
                                thumbShape = 'square'
                                line = 'top'
                                readMore = {false}
                            />
                    })}
                </div>
            </div>
            <Line type = 'sport' />
            <div className='sport-themas'>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fmuzika.jpg?alt=media&token=61f1c9b0-752e-4482-9f26-bbfe08911ae0)'}}><Link to = '/entertainmentTagged/entertainment/muzika'><span>#muzika</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Ffilm.jpg?alt=media&token=be861a46-abc7-4f44-a2ee-208325e6934b)'}}><Link to = '/entertainmentTagged/entertainment/film'><span>#film</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpoznati.jpg?alt=media&token=ab2a1bd7-4d79-431c-ab18-88d1ce25a4ed)'}}><Link to = '/entertainmentTagged/entertainment/poznati'><span>#poznati</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fzdravlje.jpg?alt=media&token=3b9c975b-b5fb-44c9-ab52-1e35c4029738)'}}><Link to = '/entertainmentTagged/entertainment/zdravlje'><span>#zdravlje</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fnauka.jpg?alt=media&token=635394b4-f143-458e-8726-344a22d3d444)'}}><Link to = '/entertainmentTagged/entertainment/nauka'><span>#nauka</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fpriroda.jpg?alt=media&token=4db9fc28-ed55-43ab-84ba-be5d60a6fe38)'}}><Link to = '/entertainmentTagged/entertainment/priroda'><span>#priroda</span></Link></div>
                <div className='thema-item' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fturizam.jpg?alt=media&token=fa40d444-f0e1-4045-bc7e-cb32b8541ab9)'}}><Link to = '/entertainmentTagged/entertainment/turizam'><span>#turizam</span></Link></div>
            </div>
          
        </div>
    )
}