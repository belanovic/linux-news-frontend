import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {getNewsByCategory} from './getNews.js';
import Card from './Card.js';

export default function Cathegory() {

    /* const {} = useContext(context); */

    const [newsByCathegory, setNewsByCathegory] = useState('');

    const {cathegory} = useParams();

    useEffect(async () => {
        const n = await getNewsByCategory(cathegory);
        n.sort((a, b) => a.datePublished - b.datePublished);
        setNewsByCathegory(n);
    }, [])

    useEffect(() => {
        console.log(newsByCathegory)
    }, [newsByCathegory])

    return (
        <div className = "cathegory">
            {/* {newsByCathegory && newsByCathegory.map(prev => <li>{prev.title}</li>)} */}
            {newsByCathegory && newsByCathegory.map((prev, i) => {
                return <Card 
                    key = {i}
                    position = {prev.position}
                    classSuffi = {'card-category'}
                    title = {prev.title}
                    paragraphs = {prev.text}
                    videoURL = {prev.videoURL}
                    datePublished  = {prev.datePublished}
                    dateUpdated  = {prev.dateUpdated}
                    src = {prev.imgURL}
                    id = {prev._id}
                />
            })}
        </div>
    )
}