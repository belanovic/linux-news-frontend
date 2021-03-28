import React, {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import {context} from './newsContext.js';
import isInViewport from './isInViewport';
import debounce from './debounce.js';

export default function Card({ classSuffix, title, paragraphs, datePublished, dateUpdated, src, id}) {
    
    const {dateLoaded, setDateLoaded} = useContext(context);
    const cardElement = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        /* const efficientFunction = debounce(function(e) {
            if(inViewport) return;
            const v = isInViewport(cardElement.current);
            setInViewport(v);
        }, 50) */

        const efficientFunction = debounce(async function() {
            
            console.log('efficientFunction called');

            const v = isInViewport(cardElement.current);
            const promiseResolveA = await setInViewport((prev) => {
                if(prev === true){
                    return true
                } else {
                    return v
                }
            });
        }, 50)

        document.addEventListener('scroll', efficientFunction);
        efficientFunction();

        
        return function() {
            document.removeEventListener('scroll', efficientFunction);
            setDateLoaded(false);
        }
    }, [])

    useEffect(() => {
        console.log(inViewport);
    }, [inViewport])

    return (
            <div className={`card-${classSuffix}`}                             >
                <Link to = {`/article/${id}`}
                    ><img className={`card-${classSuffix}-img card-img ${inViewport && 'opacityOne'}`} 
                      ref = {cardElement}
                      src={src}
                    > 
                      </img>
                </Link>
                <div className={`card-${classSuffix}-text`}>
                    <Link to = {`/article/${id}`}><h3 className={`card-${classSuffix}-title`}>{title}</h3></Link>
                    <p className={`card-${classSuffix}-date`}>
                        <span className = "date datePublished" >{dateLoaded === true? datePublished + ' > ' : ''}</span>
                        <span className = "date dateUpdated">{dateLoaded === true? dateUpdated : ''}</span>
                    </p>
                    <p className={`card-${classSuffix}-paragraphs`}>{paragraphs}</p>
                </div>
            </div>
    )
}