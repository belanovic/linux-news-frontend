import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { context } from './newsContext.js';
import isInViewport from './isInViewport';
import debounce from './debounce.js';
import shortenSentence from './shortenSentence.js';

export default function Card({ position, classSuffix, title, paragraphs, datePublished, dateUpdated, src, id }) {

    const { dateLoaded, setDateLoaded } = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {

        const efficientFunction = debounce(async function () {

            console.log('efficientFunction called');

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

    useEffect(() => {
        console.log(inViewport);
    }, [inViewport])

    return (
        <div className={`card-${classSuffix}`}>
            <Link to={`/article/${id}`}
            ><img className={`card-${classSuffix}-img card-img 
                            ${inViewport === true || (position > 5 && position < 10) ? 'opacityOne' : ''}`}
                ref={cardElement}
                src={src}
            >
                </img>
            </Link>
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
                        {dateLoaded === true ? datePublished + ' > ' : ''}
                    </span>
                    <span className="date dateUpdated">
                        {dateLoaded === true ? dateUpdated : ''}
                    </span>
                </div>
                <p className={`card-${classSuffix}-paragraphs`}>{paragraphs}</p>
            </div>
        </div>
    )
}