import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/general-small.css';
import './style/typography/general-small.css';

export default function General() {

    const {frontpageNews} = useContext(context);

    return (
        <div className='general'>
            {frontpageNews.map((article, i) => {
                if((i < 4) || (i > 7)) return
                return <Card  
                        key = {i}
                        path = {`/article/${article._id}`}
                        classSuffix = 'general'
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
            })}
        </div>
    )
}