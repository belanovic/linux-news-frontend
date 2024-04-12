import React, {useState, useEffect, useContext}  from 'react';
import { Link } from 'react-router-dom';
import shortenSentence from './shortenSentence.js';
import {context} from './newsContext';
import GenericThumb from './GenericThumb'
import './style/layout/carousel.css';
import './style/typography/carousel.css';  

import './style/layout/card-slide.css';
import './style/typography/card-slide.css';

export default function CardCarousel({ title, paragraphs,
                                       date, src, filter, id, videoURL, category}) {

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
            <div className={`card-slide`}>
                {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                <div className = {`card-slide-container-img`}>
                {src === 'generic'?
                    <GenericThumb 
                        className = {`card-slide-img `}  
                        shape = 'wide'
                        category = {category}
                    />
                    :
                    <img 
                        className={`card-slide-img `} 
                        src={src}
                        style = {{filter: filterStyle}}
                    >
                    </img>
                }
                </div>
                <div className={`card-slide-text`}>
                    <h3 className={`card-slide-title`}>{title}</h3>
                    <p className={`card-slide-paragraphs`}>{paragraphs}</p>
                </div>
            </div>
        </Link>
    )
}