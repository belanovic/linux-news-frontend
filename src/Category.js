import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from './getNews.js';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';
import GenericThumb from './GenericThumb.js';
import Pagination from './Pagination.js';
import Latest from './Latest.js';
import './style/layout/category.css';
import './style/typography/category.css';

export default function Category() {

    const {alphabet, setShowSiteOverlay, activeCategory, setActiveCategory } = useContext(context);
    const [articlesByCategory, setArticlesByCategory] = useState('');
    
    const { category, tag } = useParams();
    const [pageNum, setPageNum] = useState({number: 1, isLast: false, numOfPages: ''});

    const formatCategory = (category) => {
        if (category === 'politics') return 'Политика'
        if (category === 'business') return 'Економија'
        if (category === 'technology') return 'Технологија'
        if (category === 'entertainment') return 'Магазин'
        if (category === 'sports') return 'Спорт'
    }

    useEffect(() => {
        setActiveCategory(category);
        return () => setActiveCategory('')
    }, [])

    return (
        <div className="category container">
            <div className='category-articles'>
                <div className='articles-list'>
                    {articlesByCategory && articlesByCategory.map((article, i) => {
                        let lineType = '';
                        if(articlesByCategory.length == (i+1)) {
                            lineType = ''
                        } else {
                            lineType = 'bottom'
                        }
                        return <>

                            <Card
                                key = {i}
                                classSuffix={'category'}
                                path = {`/article/${article._id}`}
                                position={article.position} 
                                title={article.title}
                                subtitle={article.subtitle}
                                src={article.imgURL}
                                videoURL={article.videoURL}
                                filter = {article.imgFilter}
                                category = {category}
                                datePublished = {dateFormat(article.datePublished, 'month', 'dayMonth','comma', 'clock')}
                                dateUpdated = {dateFormat(article.dateUpdated,'clock')}
                                hasDateArrow={true}
                                thumbShape={'wide'}
                                line = {lineType}
                                readMore = {true}
                            />
                            
                        </>
                    })}
                </div>
                <Pagination 
                    category = {category} 
                    articlesByCategory = {articlesByCategory}
                    setArticlesByCategory = {setArticlesByCategory}
                    pageNum = {pageNum}
                    setPageNum = {setPageNum}
                />
            </div>
            <div className='category-sidebar'>
                <Latest />

                {category === 'politics' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/towgy8enNXqe5Qme" frameborder="1"></iframe>
                </div>}
                {category === 'business' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="600" src="https://rss.app/embed/v1/list/tfvgQKyHd9tPF4EH" frameborder="1"></iframe>
            
                </div>}
                {category === 'technology' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/tN5fVbqtFiG6SpDE" frameborder="1"></iframe>
                </div>}
                {category === 'entertainment' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/tpZKWfyxQjObXAr2" frameborder="1"></iframe>
                </div>}
                {category === 'sports' && <div className='news-feed'>
                    <div className='news-feed-title'>Više sa web-a</div>
                    <iframe width="850" height="1600" src="https://rss.app/embed/v1/list/t0mYvvqpHSs2iQsD" frameborder="1"></iframe>
                </div>}
            </div>

        </div>
    )
}