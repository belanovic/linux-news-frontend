import react, {useContext, useEffect, useState} from 'react';
import './style/layout/tags.css';
import './style/typography/tags.css';

export default function Tags({article}) {
    
    return (
        <div className = "tags">
                {article.tagsArr && article.tagsArr.map((prom, i) => {
                    return <div 
                                className = "tag" 
                                key = {i}
                            >
                                {prom}
                            </div>
                    }
                )}
        </div>
    )
}