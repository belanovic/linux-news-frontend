import React, {useState, useEffect, useContext} from 'react';
import NewsTicker from './NewsTicker.js';
import NewsTicker1 from './NewsTicker1.js';
import Carousel from './Carousel.js';
import Card from './Card.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';
import dateFormat from './dateFormat.js';
import {context} from './newsContext.js';
import Covid from './Covid.js';

export default function Main() {

    const {frontpageNews, setFrontpageNews} = useContext(context);

    /* const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]);

    useEffect(async () => {
        const n = await getFrontpageNews();
        n.sort((a, b) => a.position - b.position);
        setFrontpageNews(n);
    }, []) */

    return (
        <main className="main">
            <div className="container main-container">
                <Covid />
                {/* <NewsTicker /> */}
                <NewsTicker1 frontpageNews = {frontpageNews} />
                <Carousel frontpageNews = {frontpageNews} />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[5].title}
                    paragraphs = {frontpageNews[5].text}
                    datePublished = {dateFormat(frontpageNews[5].datePublished, 'month', 'dayMonth', 'comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[5].dateUpdated, 'clock')}
                    src = {frontpageNews[5].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[5]._id}
                    position = {frontpageNews[5].position}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[6].title}
                    paragraphs = {frontpageNews[6].text}
                    datePublished = {dateFormat(frontpageNews[6].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[6].dateUpdated, 'clock')}
                    src = {frontpageNews[6].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[6]._id}
                    position = {frontpageNews[6].position}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[7].title}
                    paragraphs = {frontpageNews[7].text}
                    datePublished = {dateFormat(frontpageNews[7].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[7].dateUpdated, 'clock')}
                    src = {frontpageNews[7].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[7]._id}
                    position = {frontpageNews[7].position}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[8].title}
                    paragraphs = {frontpageNews[8].text}
                    datePublished = {dateFormat(frontpageNews[8].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[8].dateUpdated, 'clock')}
                    src = {frontpageNews[8].imgURL}
                    id = {frontpageNews[8]._id}
                    frontpageNews = {frontpageNews}
                    position = {frontpageNews[8].position}
                />
                <PartTitle title = "Magazin" classSuffix = "magazin"/>
                <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    datePublished = {dateFormat(frontpageNews[9].datePublished, 'month', 'dayMonth','comma', 'clock')}
                    dateUpdated = {dateFormat(frontpageNews[9].dateUpdated, 'clock')}
                    src = 'https://bit.ly/2LE1wdd'
                 
                />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
         
                />
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
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3qH7Dfn'
              
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/39XvfFN'
          
                />
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