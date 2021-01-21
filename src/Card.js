import React from 'react';

export default function Card({ title, paragraph, date, src }) {
    return (
        <div className="card">
            <img className="card-img" src={src}></img>
            <div className="card-text">
                <h3 className="card-title">{title}</h3>
                <p className="card-paragraph">{paragraph}</p>
            </div>
            {/* <span className = "card-date">{date}</span> */}
        </div>
    )
}