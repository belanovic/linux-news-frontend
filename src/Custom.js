import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {context} from './newsContext.js';
import dateFormat from './dateFormat.js';
import shortenSentence from './shortenSentence.js';
import GenericThumb from './GenericThumb';
import './style/custom.css';


export default function Custom() {

    const {frontpageNews} = useContext(context);

    const firstArticlePosition = 27;
    const custom = {
        count: 2,
        title: 'Korisno',
        subtitle: false,
        readMore: false
    }

    function createFilter(filter) {
        if (filter) {
           return `blur(${filter[0].blur}px) brightness(${filter[0].brightness}%) 
                            contrast(${filter[0].contrast}%) grayscale(${filter[0].grayscale}%) 
                            hue-rotate(${filter[0].huRotate}deg) invert(${filter[0].invert}%) 
                            opacity(${filter[0].opacity}%) saturate(${filter[0].saturate}%) 
                            sepia(${filter[0].sepia}%)`
        } else {
            return 'none'
        }
    }

    return (
        <div className= 'custom'>
            <div className='custom-title'>{custom.title}</div>
            <div 
                className='custom-articles'
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {frontpageNews.map((article, i) => {
                if(firstArticlePosition == i) console.log(article);
                if((i < firstArticlePosition - 1) || (i > (firstArticlePosition - 1) + (custom.count - 1))) return
                return <div 
                    className={`card card-custom ${i == custom.count? 'first' : ''}`}
                    style = {{
                        width: `${100 / custom.count - 1}%`,
                        position: 'relative'
                    }}
                >
                    {article.supertitle && <div 
                        className={`card-custom-container-supertitle`}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            top: '0px',
                            zIndex: 1,
                            padding: '0em',
                        }}
                    >
                        <div 
                            className={`card-custom-supertitle`}
                            style={{
                                display: 'inline-block',
                                padding: '0.3em 0.7em',
                                color: 'white',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                background: 'linear-gradient(180deg, rgb(255, 49, 49), rgb(0, 0, 0))'
                            }}
                        >{article.supertitle}
                        </div>
                    </div>}
                    {article.imgURL && <div 
                        className={`card-custom-container-img`}
                        style = {{
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Link 
                            style = {{
                                display: 'inline-block',
                                width: '100%',
                                height: '100%'
                            
                            }} 
                            to={`/article/${article._id}`}
                        >
                            {article.videoURL && (article.videoURL !== 'none') && <div className="play"><i className="far fa-play-circle"></i></div>}
                            {(article.imgURL == 'generic')?
                                <GenericThumb 
                                    className={`card-img card-custom-img`}
                                    thumbShape = 'wide'
                                    category={article.category} 
                                    isCustom = {true}
                                />
                                :
                                <img className={`card-img card-custom-img`}
                                    style = {{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: createFilter(article.imgFilter)
                                    }}
                                    src={article.imgURL}
                                >
                                </img>}
                        </Link>
                    </div>}
                    {(article.title || article.subtitle) && <div 
                        className={`card-custom-text`}
                        style={{
                            width: '100%',
                            padding: '1em',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {article.title && <div className={`card-custom-container-title`}>
                            <Link to={`/article/${article._id}`}>
                                <div 
                                    className={`card-custom-title`}
                                    style={{
                                        marginBottom: '0.25em',
                                        marginTop: '0em',
                                        
                                        fontSize: `${7 / custom.count}rem`,
                                        lineHeight: 1.25,
                                        letterSpacing: '1px',
                                        transition: 'color 0.25s'
                                    }}
                                >
                                    {shortenSentence(article.title, 170)}
                                </div>
                            </Link>
                        </div>}
                        {(article.category || article.datePublished || article.dateUpdated) && <div 
                            className={`card-custom-info`}
                            style={{
                                order: -1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '0.5em',
                                color: 'white'
                            }}
                        >
                            {article.category && <div 
                                className='card-info-category'
                                style={{
                                    display: 'inline-block',
                                    color: 'rgb(61, 170, 237)',
                                    fontSize: `${6 / custom.count}rem`,
                                    fontFamily: 'sans-serif, Arial, Helvetica',
                                    textTransform: 'uppercase'
                                }}
                            >{article.category} / </div>}
                            <div 
                                className={`card-info-date`}
                                style = {{
                                    fontSize: `${4 / custom.count}rem`,
                                    textTransform: 'capitalize',
                                    color: 'black'
                                }}
                            >
                                {article.datePublished && <span className="date datePublished" >
                                    {article.datePublished ? dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth') : ''}
                                </span>}                            
                            </div>
                        </div>}
                        {custom.subtitle && <div className={`card-custom-container-subtitle`}>
                            <Link  to={`/article/${article._id}`}>
                                <p
                                    className={`card-custom-subtitle`}
                                    style={{
                                        fontSize: `${6 / custom.count}rem`,
                                        lineHeight: 1.5
                                    }}
                                >
                                    {shortenSentence(article.subtitle, 170)}
                                </p>
                            </Link>
                        </div>}
                        {custom.readMore && <div 
                            className='read-more'
                            style = {{
                                order: '2',
                                marginTop: 'auto'
                            }}
                        > <Link 
                            to={`/article/${article._id}`}
                            style = {{
                                display: 'inline-block',
                                padding: '0.5em 2em 0.5em 2em',
                                
                                color: 'white',
                                fontSize: `${4 / custom.count}rem`
                           
                            }}
                        >Pročitaj</Link>
                        </div>}
                    </div>}
                </div>
                })}
            </div>
        </div>
    )
}