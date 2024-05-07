import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {context} from './newsContext';
import {useParams} from 'react-router-dom';
import {getArticle} from './getNews';
import dateFormat from './dateFormat.js';
import Latest from './Latest.js';
import Line from './Line.js';
import Tags from './Tags.js';
import Parser from 'html-react-parser';
import './style/layout/article.css';
import './style/typography/article.css';  

export default function Article() { 
    const {alphabet, setShowSiteOverlay, frontpageNews, activeCategory, setActiveCategory} = useContext(context);
    const [article, setArticle] = useState('');
    const {id} = useParams();
    const [URL, setURL] = useState('');
    const [key, setKey] = useState(1);
    const [filter, setFilter] = useState('');
    const [filterStyle, setFilterStyle] = useState('none');

    const formatCathegory = (category) => {
        if (category === 'politics') return 'Politika'
        if (category === 'business') return 'Ekonomija'
        if (category === 'technology') return 'Tehnologija'
        if (category === 'entertainment') return 'Magazin'
        if (category === 'sports') return 'Sport'
    }



    useEffect(() => {
        if (filter) {
            setFilterStyle(() => {
                return `blur(${filter[0].blur}px) brightness(${filter[0].brightness}%) 
                            contrast(${filter[0].contrast}%) grayscale(${filter[0].grayscale}%) 
                            hue-rotate(${filter[0].huRotate}deg) invert(${filter[0].invert}%) 
                            opacity(${filter[0].opacity}%) saturate(${filter[0].saturate}%) 
                            sepia(${filter[0].sepia}%)`
            })
        } else {
            setFilterStyle('none')
            setFilterStyle('none')
        }
    }, [filter])

    useEffect(async() => {
        setShowSiteOverlay('flex');
        const articleFound = await getArticle(id);
        setShowSiteOverlay('none');
        if(articleFound == null) {
            window.location.href = '/'
            return
        }

        setArticle(articleFound);
        setURL(articleFound.videoURL);
        setFilter(articleFound.imgFilter);

        setActiveCategory(articleFound.category);
        
    }, [])
    
    useEffect(() => {
        return () => setActiveCategory('')
    }, [])

    return (
        <article className="container article">
            <div className='article-central'>
                {/* <div className='article-header'>
                    <div className = "article-category">Category / <Link to = {`/${article.category}/${article.category}`}>{formatCathegory(article.category)}</Link>  </div>
                </div> */}
                <div className='article-body'>
                    <h2 className = "article-title">{article.title}</h2>
                    <Line  className='inArticle' />
                    <div className = "article-metadata">
                        <div className = "article-origin">
                            <div className = "author">{'Autor'}: <span>{article.author}</span></div>
                            <div className = "source">{'Izvor'}: <span>{article.source}</span></div>
                        </div>
                        <div className = "article-date"> 
                            <div className = "date-published">{'Objavljeno'}: <span>{dateFormat(article.datePublished, 'month', 'dayMonth', 'year', 'comma', 'clock')}</span></div>
                            <div className = "date-updated">{'Poslednja izmena'}: <span>{dateFormat(article.dateUpdated, 'month', 'dayMonth', 'year', 'comma', 'clock')}</span></div>
                        </div>
                    </div>
                    <Line className='inArticle' />
                    <h3 className = "article-subtitle">{article.subtitle}</h3>
                    {article.videoURL === 'none'? 
                        <div className = "article-img-container">
                            {article.imgURL === 'generic'?
                                <div className = "generic-thumb"></div>
                                :
                                <img 
                                    className = "article-image" 
                                    src = {article.imgURL}
                                    style = {{filter: filterStyle}}
                                ></img>
                            }
                            {article.imgDescription != '' && <div className = "imgDescription">{article.imgDescription}</div>}

                        </div>
                    :
                    <div className = "article-video-container">
                        {article.videoDescription != 'none' && <div className = "videoDescription">{article.videoDescription}</div>}
                        <video className = "article-video" key={URL} controls>
                            <source src={URL} type="video/mp4"/>
                        </video>
                    </div>}

                    <div 
                        className = "article-text"
                        dangerouslySetInnerHTML={{__html: article.text}}
                    />
                    <Tags article = {article} />
                </div>
            </div>
            
            <div className='article-sidebar'>
                    <Latest />
            </div>
            
            {article.category === 'politics' && <div className='news-feed'>
                <div className='news-feed-title'>Više sa web-a</div>
                <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/taihbXUqk7EVrcHx" frameborder="1"></iframe>
            </div>}
            {article.category === 'business' && <div className='news-feed'>
                <div className='news-feed-title'>Više sa web-a</div>
                <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/tfvgQKyHd9tPF4EH" frameborder="1"></iframe>
            </div>}
            {article.category === 'technology' && <div className='news-feed'>
                <div className='news-feed-title'>Više sa web-a</div>
                <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/tGppZmp6yfjyl7wq" frameborder="1"></iframe>
            </div>}
            {article.category === 'entertainment' && <div className='news-feed'>
                <div className='news-feed-title'>Više sa web-a</div>
                <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/t1vbyAR2q2PB0Enb" frameborder="1"></iframe>
            </div>}
            {article.category === 'sports' && <div className='news-feed'>
                <div className='news-feed-title'>Više sa web-a</div>
                <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/tAkCRwm8kJvC2N0J" frameborder=""></iframe>
            </div>}
            
        </article>
    )
}