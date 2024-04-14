import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from './getNews.js';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';
import GenericThumb from './GenericThumb.js';
import Pagination from './Pagination.js';
import './style/layout/category.css';
import './style/typography/category.css';

export default function Category() {

    const {alphabet, setShowSiteOverlay } = useContext(context);
    const [articlesByCategory, setArticlesByCategory] = useState('');
    
    const { category } = useParams();
    const [pageNum, setPageNum] = useState({number: 1, isLast: false, numOfPages: ''});
   

    const formatCategory = (category) => {
        if (category === 'politics') return 'Политика'
        if (category === 'business') return 'Економија'
        if (category === 'technology') return 'Технологија'
        if (category === 'entertainment') return 'Магазин'
        if (category === 'sports') return 'Спорт'
    }

    return (
        <div className="category">
            <div className = 'category-type'>
                {formatCategory(category)}
            </div>
            {articlesByCategory && articlesByCategory.map((prev, i) => {
                return <>
                    <Card
                        key = {i}
                        position={prev.position} 
                        classSuffix={'category'}
                        title={prev.title}
                        paragraphs={prev.text}
                        videoURL={prev.videoURL}
                        datePublished = {dateFormat(prev.datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(prev.dateUpdated,'clock')}
                        src={prev.imgURL}
                        id={prev._id}
                        category = {category}
                        filter = {prev.imgFilter}
                        hasDateArrow={true}
                        line = 'bottom'
                    />
                    
                </>
            })}
            <Pagination 
                category = {category} 
                articlesByCategory = {articlesByCategory}
                setArticlesByCategory = {setArticlesByCategory}
                pageNum = {pageNum}
                setPageNum = {setPageNum}
            />
        </div>
    )
}