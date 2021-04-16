import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticle} from './getNews';
import dateFormat from './dateFormat.js';

export default function Article() {
    const [article, setArticle] = useState('');
    const {id} = useParams();

    const formatCathegory = (category) => {
        if (category === 'politics') return 'Политика'
        if (category === 'business') return 'Економија'
        if (category === 'technology') return 'Технологија'
        if (category === 'entertainment') return 'Магазин'
        if (category === 'sports') return 'Спорт'
    }

    useEffect( async() => {
        const oneArticle = await getArticle(id);
        setArticle(oneArticle);
    }, [])

    return (
        <article className="article">
            <div className = "article-category"> {formatCathegory(article.category)}</div>
            <h2 className = "article-title">{article.title}</h2>
            <div className = "article-metadata">
                <div className = "article-date">
                    <div className = "article-date-published">Objavljeno: <span>{dateFormat(article.datePublished, 'month', 'dayMonth', 'comma', 'clock')}</span></div>
                    <div className = "article-date-updated">Poslednja izmena: <span>{dateFormat(article.dateUpdated, 'month', 'dayMonth', 'comma', 'clock')}</span></div>
                </div>
                <div className = "article-metadata-line"></div>
                <div className = "article-origin">
                    <div className = "article-origin-source">Izvor: <span>{article.source}</span></div>
                    <div className = "article-origin-author">Autor: <span>{article.author}</span></div>
                </div>
            </div>
            <div className = "article-imgDescription-container">
                <img className = "article-image" src = {article.imgURL}></img>
                <div className = "imgDescription">{article.imgDescription}</div>
            </div>
            <h3 className = "article-subtitle">{article.subtitle}</h3>
            <div className = "article-text">{article !== ''? article.paragraphs.map((prom, i) => <p key = {i}>{prom.props.children}</p>) : ''}</div>
        </article>
    )
}