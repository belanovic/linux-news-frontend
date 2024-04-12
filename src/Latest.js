import React, {useState, useEffect} from 'react';
import {getLatestNews} from './getNews';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/latest.css'
import './style/typography/latest.css'

export default function Latest() {

    const [latestNews, setLatestNews] = useState('');
    const [activeTab, setActiveTab] = useState('recent')

    useEffect(async () => {
        const articles = await getLatestNews(4);
        if(articles == null) setLatestNews([]);
        setLatestNews(articles);
    }, [])

    return (
        <div className='latest'>
            <div className='latest-tabs'>
                <div 
                    className = {`recent ${activeTab == 'recent'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('recent')}>Latest
                </div>
                <div 
                    className = {`popular ${activeTab == 'popular'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('popular')}>Popular
                </div>
            </div>
            <div className='latest-news'>
            {latestNews && latestNews.map((article, i) => {
                return <>
                <Line />
                <Card 
                        key = {i}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'month', 'dayMonth', 'year')}
                        src={article.imgURL}
                        id={article._id}
                        category = {article.category}
                        filter = {article.imgFilter} 
                />
            </>
                
            })}
            </div>
        </div>
    )
}