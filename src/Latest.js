import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import {getLatestNews} from './getNews';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/latest.css'
import './style/typography/latest.css'

export default function Latest() {

    const {frontpageNews} = useContext(context);

    const [latestNews, setLatestNews] = useState('');
    const [popularNews, setPopularNews] = useState('');
    const [trendingNews, setTrendingNews] = useState('');
    const [activeTab, setActiveTab] = useState('recent');

    useEffect(async () => {
        const articles = await getLatestNews(4);
        if(articles == null) setLatestNews([]);
        setLatestNews(articles);
    }, [])

    useEffect(async () => {
        setPopularNews(frontpageNews.slice(1, 5));
        setTrendingNews([frontpageNews[4], latestNews[2], frontpageNews[2], latestNews[1]]);
    }, [frontpageNews])

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
                <div 
                    className = {`trending ${activeTab == 'trending'? 'active' : ''}`}
                    onClick = {()=> setActiveTab('trending')}>Trending
                </div>
            </div>
            {activeTab == 'recent' && <div className='latest-news'>
            {latestNews && latestNews.map((article, i) => {
                return  <Card 
                        key = {i}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        src={article.imgURL}
                        id={article._id}
                        category = {article.category}
                        filter = {article.imgFilter} 
                        line = 'top'
                    />                
            })}
            </div>}
            {activeTab == 'popular' && <div className='latest-news'>
            {popularNews && popularNews.map((article, i) => {
                return  <Card 
                        key = {i}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        src={article.imgURL}
                        id={article._id}
                        category = {article.category}
                        filter = {article.imgFilter} 
                        line = 'top'
                    />                
            })}
            </div>}
            {activeTab == 'trending' && <div className='latest-news'>
            {trendingNews && trendingNews.map((article, i) => {
                return  <Card 
                        key = {i}
                        classSuffix={'latest'}
                        title={article.title}
                        videoURL={article.videoURL}
                        datePublished = {dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth')}
                        src={article.imgURL}
                        id={article._id}
                        category = {article.category}
                        filter = {article.imgFilter} 
                        line = 'top'
                    />                
            })}
            </div>}
        </div>
    )
}