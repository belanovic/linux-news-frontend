import React, {useState, useEffect, useContext, useRef} from 'react';
import NewsTicker1 from './NewsTicker1.js';
import './style/layout/main.css';
import './style/typography/main.css';
import './style/play.css';
import Carousel from './Carousel.js';
import Latest from './Latest.js';
import General from './General.js';
import GeneralSmall from './GeneralSmall.js';
import Recommend from './Recommend.js';
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
import Space from './Space.js';
import Form from './Form.js';

export default function Main() {

    const {frontpageNews, setActiveTab } = useContext(context);
    const mainOverlay = useRef(null);

    useEffect(() => {setActiveTab('recent')}, [])

    return (
        <main className="main">
            <div className="container main-container">
                <section className='central'>
                        <Carousel />
                        <Latest />
                </section>

                <Space margin = '3em'/>
                <General />
                <Space margin = '3em'/>
                <GeneralSmall />
                <Line type = 'main'/>
                <Recommend />
                <Line type = 'main'/>
                <Magazin />
               
            </div>
        </main>
    )
}