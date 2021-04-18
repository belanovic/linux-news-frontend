import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from './getNews.js';
import Card from './Card.js';
import Line from './Line.js';
import dateFormat from './dateFormat.js';

export default function Cathegory() {

    const [newsByCathegory, setNewsByCathegory] = useState('');
    const { cathegory } = useParams();

    useEffect(async () => {
        const n = await getNewsByCategory(cathegory);
        n.sort((a, b) => a.datePublished - b.datePublished);
        setNewsByCathegory(n);
    }, [])

    return (
        <div className="cathegory">
            {/* {newsByCathegory && newsByCathegory.map(prev => <li>{prev.title}</li>)} */}
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
                    />
                    <Line key = {i+1} />
                </>
            })}
        </div>
    )
}