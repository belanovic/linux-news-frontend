import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from './getNews.js';
import {context} from './newsContext';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';
import GenericThumb from './GenericThumb';

export default function Cathegory() {
    const {alphabet} = useContext(context);
    const [newsByCathegory, setNewsByCathegory] = useState('');
    const { cathegory } = useParams();

    const formatCathegory = (cathegory) => {
        if (cathegory === 'politics') return 'Политика'
        if (cathegory === 'business') return 'Економија'
        if (cathegory === 'technology') return 'Технологија'
        if (cathegory === 'entertainment') return 'Магазин'
        if (cathegory === 'sports') return 'Спорт'
    }

    useEffect(async () => {
        const n = await getNewsByCategory(cathegory);
        n.sort((a, b) => a.datePublished - b.datePublished);
        setNewsByCathegory(n);
    }, [])

    return (
        <div className="cathegory">
            <div className = 'cathegory-type'>
                {formatCathegory(cathegory)}
            </div>
            {newsByCathegory && newsByCathegory.map((prev, i) => {
                return <>
                    <Card
                        position={prev.position}
                        classSuffix={'cathegory'}
                        title={prev.title}
                        paragraphs={prev.text}
                        videoURL={prev.videoURL}
                        datePublished = {dateFormat(prev.datePublished, 'month', 'dayMonth','comma', 'clock')}
                        dateUpdated = {dateFormat(prev.dateUpdated,'clock')}
                        src={prev.imgURL}
                        id={prev._id}
                        key = {i}
                        cathegory = {cathegory}
                        
                    />
                    <Line key = {i+1} />
                </>
            })}
        </div>
    )
}