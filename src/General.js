import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext.js';
import Card from './Card.js';
import Line from './Line';
import dateFormat from './dateFormat.js';
import './style/layout/general.css';
import './style/typography/general.css';

export default function General() {

    const {frontpageNews} = useContext(context);

    return (
        <div className='general'>
             <Card  key = {0}
                    path = {`/article/${frontpageNews[4]._id}`}
                    classSuffix = 'general'
                    id = {frontpageNews[4]._id}
                    src = {frontpageNews[4].imgURL}
                    videoURL = {frontpageNews[4].videoURL}
                    filter = {frontpageNews[4].imgFilter}
                    title = {frontpageNews[4].title}
                    thumbShape = 'wide'
                    readMore={false}
                />
             <Card  key = {1}
                    path = {`/article/${frontpageNews[5]._id}`}
                    classSuffix = 'general'
                    id = {frontpageNews[5]._id}
                    src = {frontpageNews[5].imgURL}
                    videoURL = {frontpageNews[5].videoURL}
                    filter = {frontpageNews[5].imgFilter}
                    title = {frontpageNews[5].title}
                    thumbShape = 'wide'
                    readMore={false}
                />
             <Card  key = {2}
                    path = {`/article/${frontpageNews[6]._id}`}
                    classSuffix = 'general'
                    id = {frontpageNews[6]._id}
                    src = {frontpageNews[6].imgURL}
                    videoURL = {frontpageNews[6].videoURL}
                    filter = {frontpageNews[6].imgFilter}
                    title = {frontpageNews[6].title}
                    thumbShape = 'wide'
                    readMore={false}
                />
             <Card  key = {3}
                    path = {`/article/${frontpageNews[7]._id}`}
                    classSuffix = 'general'
                    id = {frontpageNews[7]._id}
                    src = {frontpageNews[7].imgURL}
                    videoURL = {frontpageNews[7].videoURL}
                    filter = {frontpageNews[7].imgFilter}
                    title = {frontpageNews[7].title}
                    thumbShape = 'wide'  
                    readMore={false}                  
                />               
        </div>
    )
}