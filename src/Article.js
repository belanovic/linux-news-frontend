import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticle} from './getNews';
import dateFormat from './dateFormat.js';

export default function Article() {
    const [article, setArticle] = useState('');
    const {id} = useParams();

    useEffect( async() => {
        const oneArticle = await getArticle(id);
        setArticle(oneArticle);
    }, [])

    useEffect( async() => {
        console.log(article)
    }, [article])

    return (
        <article className="article">
            <div class = "article-category"> {article.category}</div>
            <h2 className = "article-title">{article.title}</h2>
            <div className = "article-origin">
                <div className = "article-origin-source">Izvor: {article.source}</div>
                <div className = "article-origin-author">Autor: {article.author}</div>
            </div>
            <div>
                <div>Objavljeno: {dateFormat(article.datePublished, 'month', 'dayMonth', 'comma', 'clock')}</div>
                <div>Poslednja izmena: {dateFormat(article.dateUpdated, 'month', 'dayMonth', 'comma', 'clock')}</div>
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