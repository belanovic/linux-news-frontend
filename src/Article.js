import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArticle} from './getNews';

export default function Article() {
    const [article, setArticle] = useState('');
    const {id} = useParams();

    useEffect( async() => {
        const res = await getArticle(id);
        const a = await res.json();
        console.log(a);
        setArticle(a);
    }, [])

    return (
        <article className="article">
            <h2 className = "article-title">{article.title}</h2>
            <h3 className = "article-subtitle">{article.subtitle}</h3>
            <div className = "article-text">{article.paragraph}</div>
        </article>
    )
}