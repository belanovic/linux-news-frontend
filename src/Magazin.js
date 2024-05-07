import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/magazin.css';
import './style/typography/magazin.css';

export default function Magazin() {

    const {frontpageNews} = useContext(context);

    const [magazinNews, setMagazinNews] = useState('');

    useEffect(async () => {
        setMagazinNews();
        setMagazinNews(frontpageNews);
    }, [frontpageNews])

    return (
        <div className='magazin'>
            <div className='magazin-header'>
                {/* <div className='magazin-title'>Magazin</div> */}
          
                <img src = 'https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Flabel-magazin.jpg?alt=media&token=5a87ef1b-1bca-4aff-ae5c-17b09f3e69be'></img>
              

            </div>
            <div className='magazin-up'>
                    <Card  
                        key = {8}
                        path = {`/article/${frontpageNews[8]._id}`}
                        classSuffix = 'magazinBig'
                        id = {frontpageNews[8]._id}
                        src = {frontpageNews[8].imgURL}
                        videoURL = {frontpageNews[8].videoURL}
                        category = {frontpageNews[8].category}
                        filter = {frontpageNews[8].imgFilter}
                        title = {frontpageNews[8].title}
                        subtitle = {frontpageNews[8].subtitle}
                        thumbShape = 'wide'
                        readMore={true}
                        datePublished = {dateFormat(frontpageNews[8].datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(frontpageNews[8].dateUpdated,'clock')}
                        hasDateArrow={true}
                    />
            </div>
            <div className='magazin-down'>
                {frontpageNews.map((article, i) => {
                    if((i < 9) || (i > 11)) return
                    return <Card  
                        key = {i}
                        path = {`/article/${article._id}`}
                        classSuffix = 'magazin'
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
            <div className='magazin-themas'>
                <div className='thema-item'><span className='thema-label'>Muzika</span></div>
                <div className='thema-item'><span className='thema-label'>Film</span></div>
                <div className='thema-item'><span className='thema-label'>Poznati</span></div>
                <div className='thema-item'><span className='thema-label'>Zdravlje</span></div>
                <div className='thema-item'><span className='thema-label'>Nauka</span></div>
                <div className='thema-item'><span className='thema-label'>Priroda</span></div>
                <div className='thema-item'><span className='thema-label'>Turizam</span></div>
            </div>
          
        </div>
    )
}