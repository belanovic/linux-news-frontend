import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from './newsContext.js';
import isInViewport from './isInViewport';
import debounce from './debounce.js';
import shortenSentence from './shortenSentence.js';
import GenericThumb from './GenericThumb';
import Line from './Line.js';
import './style/layout/card.css';
import './style/typography/card.css';  
import './style/layout/card-general.css';
import './style/typography/card-general.css';  
import './style/layout/card-magazin.css';
import './style/typography/card-magazin.css';  
import './style/layout/card-sport.css';
import './style/typography/card-sport.css';  
import './style/layout/card-category.css';
import './style/typography/card-category.css'; 
import './style/layout/card-latest.css';
import './style/typography/card-latest.css'; 

export default function Card({ position, classSuffix, title, subtitle, paragraphs, videoURL, line,
    datePublished, dateUpdated, src, filter, id, category, frontpageNews, thumbShape, hasDateArrow }) {

    const { dateLoaded, setDateLoaded, alphabet } = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    const [filterStyle, setFilterStyle] = useState('none');

    
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
        }
    }, [filter])

    useEffect(() => {

        const efficientFunction = debounce(async function () {

            const v = isInViewport(cardElement.current);
            const promiseResolveA = await setInViewport((prev) => {
                if (prev === true) {
                    return true
                } else {
                    return v
                }
            });
        }, 50)

        document.addEventListener('scroll', efficientFunction);
        efficientFunction();


        return function () {
            document.removeEventListener('scroll', efficientFunction);
            setDateLoaded(false);
        }
    }, [])

    return (
        <>
        {line == 'top'? <Line /> : ''}
        <div className={`card card-${classSuffix}`}>
            <div className={`card-${classSuffix}-container-img`}>
                <Link to={`/article/${id}`}>
                    {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                    {src === 'generic' ?
                        <GenericThumb 
                            className={`card-${classSuffix}-img card-img 
                            ${inViewport === true || (position > 5 && position < 10) ? 'opacityOne' : ''}`}
                            shape = {thumbShape} 
                            category={category} 
                        />
                        :
                        <img className={`card-${classSuffix}-img card-img 
                                ${inViewport === true || (position > 5 && position < 10) ? 'opacityOne' : ''}`}
                            ref={cardElement}
                            src={src = src}
                            style={{ filter: filterStyle }}
                        >
                        </img>}
                </Link>
            </div>
            <div className={`card-${classSuffix}-text`}>
                <div className={`card-${classSuffix}-container-title`}>
                    <Link to={`/article/${id}`}>
                        <div className={`card-${classSuffix}-title`}>
                            {shortenSentence(title, 70)}
                        </div>
                    </Link>
                </div>
                <div className={`card-${classSuffix}-info`}>
                    <div className='card-category'>{category} / </div>
                    <div className={`card-date`}>
                        <span className="date datePublished" >
                            {datePublished ? datePublished: ''}
                        </span>
                        <span>{hasDateArrow? ' > ' : ''}</span>
                        <span className="date dateUpdated">
                            {dateUpdated ? dateUpdated : ''}
                        </span>
                    </div>
                </div>
                <div className={`card-${classSuffix}-container-paragraph`}>
                    <Link to={`/article/${id}`}>
                        <p
                            className={`card-${classSuffix}-paragraph`}
                        >
                            {shortenSentence(subtitle, 100)}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
        {line == 'bottom'? <Line /> : ''}
        </>
    )
}