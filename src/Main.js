import React, {useState, useEffect, useContext, useRef} from 'react';
import NewsTicker1 from './NewsTicker1.js';
import './style/layout/main.css';
import './style/typography/main.css';
import './style/play.css';
import Carousel from './Carousel.js';
import Latest from './Latest.js';
import General from './General.js';
import Magazin from './Magazin.js';
import Card from './Card.js';
import NavigationDesk from './NavigationDesk.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';
import {getFrontpageNews} from './getNews.js';
import dateFormat from './dateFormat.js';
import {context} from './newsContext.js';
import Covid from './Covid.js';
import Line from './Line.js';
import Form from './Form.js';

export default function Main() {

    const {frontpageNews, setActiveTab } = useContext(context);
    const mainOverlay = useRef(null);

    useEffect(() => {setActiveTab('recent')}, [])

    return (
        <main className="main">
            <div className="container main-container">
                {/* <NewsTicker1 frontpageNews = {frontpageNews} /> */}
                <section className='central'>
                    <div className='central-up'>
                        <Carousel />
                        <Latest />
                    </div>
                    <div className='central-down'>
                        <General />
                    </div>
                </section>
                <Line className = 'inMain' />
                <Magazin />
               
                 {/* <Card 

                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                    line = 'bottom'
         
                />
                 <Card 

                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                    line = 'bottom'
                
                />
                <PartTitle title = "Sport" classSuffix = "sport" />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2Y1Vyp1'
                    line = 'bottom'

                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3qH7Dfn'
                    line = 'bottom'
              
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/39XvfFN'
                    line = 'bottom'
          
                />

                <Card 

                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraphs = {lorem(0, 150)}
                    // datePublished = {new Date(frontpageNews[5].datePublished).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    // dateUpdated = {new Date(frontpageNews[5].dateUpdated).toLocaleTimeString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3sI8COt'
                /> */}
            </div>
        </main>
    )
}