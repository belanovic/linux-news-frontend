import React, {useState, useEffect, useContext} from 'react';
import Carousel from './Carousel.js';
import Card from './Card.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';
import time from './time.js';
import {context} from './newsContext.js';

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
                <Carousel frontpageNews = {frontpageNews} />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[5].title}
                    paragraphs = {frontpageNews[5].text}
                    datePublished = {time(frontpageNews[5].datePublished, 'month', 'dayMonth', 'clock')}
                    dateUpdated = {time(frontpageNews[5].dateUpdated, 'clock')}
                    src = {frontpageNews[5].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[5]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[6].title}
                    paragraphs = {frontpageNews[6].text}
                    datePublished = {time(frontpageNews[6].datePublished, 'month', 'dayMonth', 'clock')}
                    dateUpdated = {time(frontpageNews[6].dateUpdated, 'clock')}
                    src = {frontpageNews[6].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[6]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[7].title}
                    paragraphs = {frontpageNews[7].text}
                    datePublished = {time(frontpageNews[7].datePublished, 'month', 'dayMonth', 'clock')}
                    dateUpdated = {time(frontpageNews[7].dateUpdated, 'clock')}
                    src = {frontpageNews[7].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[7]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[8].title}
                    paragraphs = {frontpageNews[8].text}
                    datePublished = {time(frontpageNews[8].datePublished, 'month', 'dayMonth', 'clock')}
                    dateUpdated = {time(frontpageNews[8].dateUpdated, 'clock')}
                    src = {frontpageNews[8].imgURL}
                    id = {frontpageNews[8]._id}
                    frontpageNews = {frontpageNews}
                />
                <PartTitle title = "Magazin" classSuffix = "magazin"/>
                <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    datePublished = {time(frontpageNews[9].datePublished, 'month', 'dayMonth', 'clock')}
                    dateUpdated = {time(frontpageNews[9].dateUpdated, 'clock')}
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