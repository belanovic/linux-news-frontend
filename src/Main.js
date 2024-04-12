import React, {useState, useEffect, useContext} from 'react';
import NewsTicker from './NewsTicker.js';
import NewsTicker1 from './NewsTicker1.js';
import './style/layout/main.css';
import './style/typography/main.css';
import Carousel from './Carousel.js';
import Latest from './Latest.js';
import Card from './Card.js';

import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';
import dateFormat from './dateFormat.js';
import {context} from './newsContext.js';
import Covid from './Covid.js';
import Line from './Line.js';
import Form from './Form.js';

export default function Main() {

    const {frontpageNews } = useContext(context);

    /* const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]); */

    /* useEffect(async () => {
        const n = await getFrontpageNews();
        n.sort((a, b) => a.position - b.position);
        setFrontpageNews(n);
    }, []) */

    return (
        <main className="main">
            <div className="container main-container">
                <NewsTicker1 frontpageNews = {frontpageNews} />
                {/* <Covid /> */}
                {/* <NewsTicker /> */}
                <section className='central'>
                    <Carousel frontpageNews = {frontpageNews} />
                   <Latest />
                </section>
                <Line />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[4].title}
                    subtitle = {frontpageNews[4].subtitle}
                    paragraphs = {frontpageNews[4].text}
                    datePublished = {dateFormat(frontpageNews[4].datePublished, 'month', 'dayMonth', 'comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[4].dateUpdated, 'clock')}
                    src = {frontpageNews[4].imgURL2}
                    filter = {frontpageNews[4].imgFilter2}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[4]._id}
                    position = {frontpageNews[4].position}
                    videoURL = {frontpageNews[4].videoURL}
                    thumbShape = 'square'
                    category = {frontpageNews[4].category}
                    hasDateArrow={true}
                />
                <Line />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[5].title}
                    subtitle = {frontpageNews[5].subtitle}
                    paragraphs = {frontpageNews[5].text}
                    datePublished = {dateFormat(frontpageNews[5].datePublished, 'month', 'dayMonth', 'comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[5].dateUpdated, 'clock')}
                    src = {frontpageNews[5].imgURL2}
                    filter = {frontpageNews[5].imgFilter2}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[5]._id}
                    position = {frontpageNews[5].position}
                    videoURL = {frontpageNews[5].videoURL}
                    thumbShape = 'square'
                    category = {frontpageNews[5].category}
                    hasDateArrow={true}
                />
                
                <Line />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[6].title}
                    subtitle = {frontpageNews[6].subtitle}
                    paragraphs = {frontpageNews[6].text}
                    datePublished = {dateFormat(frontpageNews[6].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[6].dateUpdated, 'clock')}
                    src = {frontpageNews[6].imgURL2}
                    filter = {frontpageNews[6].imgFilter2}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[6]._id}
                    position = {frontpageNews[6].position}
                    videoURL = {frontpageNews[6].videoURL}
                    thumbShape = 'square'
                    category = {frontpageNews[6].category}
                    hasDateArrow={true}
                />
                <Line />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[7].title}
                    subtitle = {frontpageNews[7].subtitle}
                    paragraphs = {frontpageNews[7].text}
                    datePublished = {dateFormat(frontpageNews[7].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[7].dateUpdated, 'clock')}
                    src = {frontpageNews[7].imgURL2}
                    filter = {frontpageNews[7].imgFilter2}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[7]._id}
                    position = {frontpageNews[7].position}
                    videoURL = {frontpageNews[7].videoURL}
                    thumbShape = 'square'
                    category = {frontpageNews[7].category}
                    hasDateArrow={true}
                />
                <Line />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[8].title}
                    subtitle = {frontpageNews[8].subtitle}
                    paragraphs = {frontpageNews[8].text}
                    datePublished = {dateFormat(frontpageNews[8].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[8].dateUpdated, 'clock')}
                    src = {frontpageNews[8].imgURL2}
                    filter = {frontpageNews[8].imgFilter2}
                    id = {frontpageNews[8]._id}
                    frontpageNews = {frontpageNews}
                    position = {frontpageNews[8].position}
                    videoURL = {frontpageNews[8].videoURL}
                    thumbShape = 'square'
                    category = {frontpageNews[8].category}
                    hasDateArrow={true}
                />
                <PartTitle title = "Magazin" classSuffix = "magazin"/>
                <Card 
                    classSuffix = 'magazin'
                    title = {frontpageNews[9].title}
                    subtitle = {frontpageNews[9].subtitle}
                    paragraphs = {frontpageNews[9].text}
                    datePublished = {dateFormat(frontpageNews[9].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[9].dateUpdated, 'clock')}
                    src = {frontpageNews[9].imgURL}
                    filter = {frontpageNews[9].imgFilter2}
                    id = {frontpageNews[9]._id}
                    frontpageNews = {frontpageNews}
                    position = {frontpageNews[9].position}
                    videoURL = {frontpageNews[9].videoURL}
                    thumbShape = 'wide'
                    category = {frontpageNews[9].category}
                    hasDateArrow={true}
                />
                <Line />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
         
                />
                <Line />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                
                />
                <PartTitle title = "Sport" classSuffix = "sport" />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2Y1Vyp1'

                />
                <Line />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3qH7Dfn'
              
                />
                <Line />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/39XvfFN'
          
                />
                <Line />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3sI8COt'
                    
                />
            </div>
        </main>
    )
}