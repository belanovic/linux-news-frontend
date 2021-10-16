import React, {useState, useEffect, useContext}  from 'react';
import { Link } from 'react-router-dom';
import shortenSentence from './shortenSentence.js';
import {context} from './newsContext';
import GenericThumb from './GenericThumb'
import './style/layout/carousel.css';
import './style/typography/carousel.css';  

export default function CardCarousel({ classSuffix, title, paragraphs,
                                       date, src, filter, id, videoURL, cathegory}) {

    const {alphabet} = useContext(context);

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

    return (
        <Link to = {`/article/${id}`}>
            <div className={`card-${classSuffix}`}>
                {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                <div className = {`card-${classSuffix}-container-img`}>
                {src === 'generic'?
                    <GenericThumb 
                        className = {`card-${classSuffix}-img `}  
                        shape = 'wide'
                        cathegory = {cathegory}
                    />
                    :
                    <img 
                        className={`card-${classSuffix}-img `} 
                        src={src}
                        style = {{filter: filterStyle}}
                    >
                    </img>
                }
                </div>
                <div className={`card-${classSuffix}-text`}>
                    <h3 className={`card-${classSuffix}-title`}>{title}</h3>
                    <p className={`card-${classSuffix}-paragraphs`}>{paragraphs}</p>
                </div>
            </div>
        </Link>
    )
}