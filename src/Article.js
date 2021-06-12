import React, {useState, useEffect, useContext} from 'react';
import {context} from './newsContext';
import {useParams} from 'react-router-dom';
import {getArticle} from './getNews';
import dateFormat from './dateFormat.js';
import Line from './Line.js';
import Tags from './Tags.js';
import Parser from 'html-react-parser';

export default function Article() { 
    const {alphabet, setShowCmsOverlay} = useContext(context);
    const [article, setArticle] = useState('');
    const {id} = useParams();
    const [URL, setURL] = useState('');
    const [key, setKey] = useState(1);

    const formatCathegory = (category) => {
        if (category === 'politics') return 'Politika'
        if (category === 'business') return 'Ekonomija'
        if (category === 'technology') return 'Tehnologija'
        if (category === 'entertainment') return 'Magazin'
        if (category === 'sports') return 'Sport'
    }

    useEffect(async() => {
        const oneArticle = await getArticle(id);
        setArticle(oneArticle);
        setURL(oneArticle.videoURL);
        console.log(oneArticle.text);
    }, [])

    return (
        <article className="article">
            <div className = "article-category"> {formatCathegory(article.category)}</div>
            <h2 className = "article-title">{article.title}</h2>
            <Line />
            <div className = "article-metadata">
                <div className = "article-date"> 
                    <div className = "article-date-published">{'Objavljeno'}: <span>{dateFormat(article.datePublished, 'month', 'dayMonth', 'comma', 'clock')}</span></div>
                    <div className = "article-date-updated">{'Poslednja izmena'}: <span>{dateFormat(article.dateUpdated, 'month', 'dayMonth', 'comma', 'clock')}</span></div>
                </div>
                <div className = "article-metadata-line"></div>
                <div className = "article-origin">
                    <div className = "article-origin-source">{'Izvor'}: <span>{article.source}</span></div>
                    <div className = "article-origin-author">{'Autor'}: <span>{article.author}</span></div>
                </div>
            </div>
            <Line />

            {article.videoURL === 'none'? 
                <div className = "article-img-container">
                    {article.imgURL === 'generic'?
                        <div className = "generic-thumb"></div>
                        :
                        <img className = "article-image" src = {article.imgURL}></img>
                    }
                    {article.imgURL === 'generic'?
                        <div className = "generic-thumb"></div>
                        :
                        <div className = "imgDescription">{article.imgDescription}</div>
                    }

                </div>
            :
            <div className = "article-video-container">
                <div className = "videoDescription">{article.videoDescription}</div>{/* 
                 */}<video className = "article-video" key={URL} controls>
                    <source src={URL} type="video/mp4"/>
                </video>
            </div>}

            <h3 className = "article-subtitle">{article.subtitle}</h3>
            <div dangerouslySetInnerHTML={{__html: article.text}} />
            <Tags article = {article} />
        </article>
    )
}