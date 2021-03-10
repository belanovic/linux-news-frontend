import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ classSuffix, title, paragraphs, datePublished, dateUpdated, src, id}) {
    return ( 
            <div className={`card-${classSuffix}`}>
                <Link to = {`/article/${id}`}
                    ><img className={`card-${classSuffix}-img`} src={src}></img>
                </Link>
                <div className={`card-${classSuffix}-text`}>
                    <Link to = {`/article/${id}`}><h3 className={`card-${classSuffix}-title`}>{title}</h3></Link>
                    <p className={`card-${classSuffix}-date`}>
                        <span className = "date datePublished" >{datePublished}</span>
                        {` >>> `}
                        <span className = "date dateUpdated">{dateUpdated}</span>
                    </p>
                    <p className={`card-${classSuffix}-paragraphs`}>{paragraphs}</p>
                </div>
            </div>
    )
}