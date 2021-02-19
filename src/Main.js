import React, {useState, useEffect} from 'react';
import BootstrapCarousel from './BootstrapCarousel.js';
import Card from './Card.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';



export default function Main() {

    const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]);

    useEffect(async () => {
        const n = await getFrontpageNews();
        n.sort((a, b) => a.position - b.position);
        n.forEach((prom) => {
            console.log(prom.position + ' ' + prom.title);
        })
        setFrontpageNews(n);
    }, [])

    return (
        <main className="main">
            <div className="container main-container">
                <BootstrapCarousel frontpageNews = {frontpageNews} />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[5].title}
                    paragraph = {frontpageNews[5].paragraph}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = {frontpageNews[5].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[5]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[6].title}
                    paragraph = {frontpageNews[6].paragraph}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = {frontpageNews[6].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[6]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[7].title}
                    paragraph = {frontpageNews[7].paragraph}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = {frontpageNews[7].imgURL}
                    frontpageNews = {frontpageNews}
                    id = {frontpageNews[7]._id}
                />
                <Card 
                    classSuffix = 'general'
                    title = {frontpageNews[8].title}
                    paragraph = {frontpageNews[8].paragraph}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = {frontpageNews[8].imgURL}
                    id = {frontpageNews[8]._id}
                    frontpageNews = {frontpageNews}
                />
                <PartTitle title = "Magazin" />
                <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                <PartTitle title = "Sport" />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2Y1Vyp1'
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3qH7Dfn'
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/39XvfFN'
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3sI8COt'
                />
            </div>
        </main>
    )
}