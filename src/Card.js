import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {context} from './newsContext.js';

export default function Card({ classSuffix, title, paragraphs, datePublished, dateUpdated, src, id}) {
    const {dateLoaded, setDateLoaded} = useContext(context);
    useEffect(() => {
        return function() {
            setDateLoaded(false);
        }
    }, [])
    /* useEffect(() => {
        console.log(dateLoaded);
    }, [dateLoaded]); */
    return (
            <div className={`card-${classSuffix}`}>
                <Link to = {`/article/${id}`}
                    ><img className={`card-${classSuffix}-img`} src={src}></img>
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