import React from 'react';

export default function PartTitle({classSuffix, title}) {
    return (
        <div className = {`container partTitle partTitle-${classSuffix}`}>
            <div>
                {title}
            </div>
        </div>
    )
}