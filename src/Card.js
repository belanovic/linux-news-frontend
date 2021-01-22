import React from 'react';

export default function Card({ classSuffix, title, paragraph, date, src }) {
    return (
        <div className= {`card-${classSuffix}`}>
            <img className = {`card-${classSuffix}-img`} src={src}></img>
            <div className = {`card-${classSuffix}-text`}>
                <h3 className = {`card-${classSuffix}-title`}>{title}</h3>
                <p className = {`card-${classSuffix}-paragraph`}>{paragraph}</p>
            </div>
            {/* <span className = "card-date">{date}</span> */}
        </div>
    )
}