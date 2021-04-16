import React, {useContext}  from 'react';
import { Link } from 'react-router-dom';
import shortenSentence from './shortenSentence.js';
import {context} from './newsContext';
import cirilizatorDecirilizator from './cirilizatorDecirilizator.js';

export default function CardCarousel({ classSuffix, title, paragraphs, date, src, id}) {

    const {alphabet} = useContext(context);

    return (
        <Link to = {`/article/${id}`}>
            <div className={`card-${classSuffix}`}>
                <img className={`card-${classSuffix}-img `} src={src}></img>
                <div className={`card-${classSuffix}-text`}>
                    <h3 className={`card-${classSuffix}-title`}>{cirilizatorDecirilizator(alphabet, title)}</h3>
                    <p className={`card-${classSuffix}-paragraphs`}>{paragraphs}</p>
                </div>
                {/* <span className = "card-date">{date}</span> */}
            </div>
        </Link>
    )
}