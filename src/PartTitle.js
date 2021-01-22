import React from 'react';

export default function PartTitle({title}) {
    return (
        <div className="partTitle">
            <div className="container footer-container">
                {title}
            </div>
        </div>
    )
}