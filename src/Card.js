import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from './newsContext.js';
import isInViewport from './isInViewport';
import debounce from './debounce.js';
import shortenSentence from './shortenSentence.js';
import GenericThumb from './GenericThumb';
import './style/layout/card.css';
import './style/typography/card.css'; 

export default function Card({ position, classSuffix, title, subtitle, paragraphs, videoURL, 
                               datePublished, dateUpdated, src, id, cathegory }) {

    const { dateLoaded, setDateLoaded, alphabet } = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);

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
        <div className={`card card-${classSuffix}`}>
            <div className = {`card-${classSuffix}-container-img`}>
                <Link to={`/article/${id}`}>
                    {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                    {src === 'generic'?
                    <GenericThumb className = {`generic-thumb card ${cathegory}`} cathegory = {cathegory}/>
                    :
                    <img className={`card-${classSuffix}-img card-img 
                                ${inViewport === true || (position > 5 && position < 10) ? 'opacityOne' : ''}`}
                        ref={cardElement}
                        src={src = src}
                    >
                    </img>}
                </Link>
            </div>
            <div className={`card-${classSuffix}-text`}>
                <div className={`card-${classSuffix}-container-title`}>
                    <Link to={`/article/${id}`}>
                        <h3 className={`card-${classSuffix}-title`}>
                            {shortenSentence(title, 70)}
                        </h3>
                    </Link>
                </div> 
                <div className={`card-${classSuffix}-date`}>
                    <span className="date datePublished" >
                        {datePublished ? datePublished + ' > ' : ''}
                    </span>
                    <span className="date dateUpdated"> 
                        {dateUpdated ? dateUpdated : ''} 
                    </span>
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
    )
}