import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from './getNews.js';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';
import GenericThumb from './GenericThumb.js';
import './style/layout/category.css';
import './style/typography/category.css';

export default function Category() {
    const {alphabet} = useContext(context);
    const [newsByCategory, setNewsByCategory] = useState('');
    const { category } = useParams();

    const formatCategory = (category) => {
        if (category === 'politics') return 'Политика'
        if (category === 'business') return 'Економија'
        if (category === 'technology') return 'Технологија'
        if (category === 'entertainment') return 'Магазин'
        if (category === 'sports') return 'Спорт'
    }

    useEffect(async () => {
        const n = await getNewsByCategory(category);
        n.sort((a, b) => a.datePublished - b.datePublished);
        setNewsByCategory(n);
    }, [])

    return (
        <div className="category">
            <div className = 'category-type'>
                {formatCategory(category)}
            </div>
            {newsByCategory && newsByCategory.map((prev, i) => {
                return <>
                    <Card
                        position={prev.position} 
                        classSuffix={'category'}
                        title={prev.title}
                        paragraphs={prev.text}
                        videoURL={prev.videoURL}
                        datePublished = {dateFormat(prev.datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(prev.dateUpdated,'clock')}
                        src={prev.imgURL}
                        id={prev._id}
                        key = {i}
                        category = {category}
                        filter = {prev.imgFilter}
                        
                    />
                    <Line key = {i+1} />
                </>
            })}
        </div>
    )
}