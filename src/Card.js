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
    datePublished, dateUpdated, src, filter, id, cathegory, frontpageNews }) {

    const { dateLoaded, setDateLoaded, alphabet } = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    const [filterStyle, setFilterStyle] = useState('none');

    useEffect(() => {
        if (filter) {
            console.log('ovo je filter')
            console.log(filterStyle)
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
        <div className={`card card-${classSuffix}`}>
            <div className={`card-${classSuffix}-container-img`}>
                <Link to={`/article/${id}`}>
                    {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                    {src === 'generic' ?
                        <GenericThumb className={`generic-thumb card ${cathegory}`} cathegory={cathegory} />
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