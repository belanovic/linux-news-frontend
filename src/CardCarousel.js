import React, {useContext}  from 'react';
import { Link } from 'react-router-dom';
import shortenSentence from './shortenSentence.js';
import {context} from './newsContext';
import GenericThumb from './GenericThumb'

export default function CardCarousel({ classSuffix, title, paragraphs, 
                                       date, src, id, videoURL, cathegory}) {

    const {alphabet} = useContext(context);

    return (
        <Link to = {`/article/${id}`}>
            <div className={`card-${classSuffix}`}>
                {videoURL !== 'none' && <div className="play"><i className="far fa-play-circle"></i></div>}
                <div className = {`card-${classSuffix}-container-img`}>
                {src === 'generic'?
                <GenericThumb className = {`generic-thumb card-slide ${cathegory}`} cathegory = {cathegory}/>
                    :
                    <img className={`card-${classSuffix}-img `} src={src}></img>
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