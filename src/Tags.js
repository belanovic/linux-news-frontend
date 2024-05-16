import react, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style/layout/tags.css';
import './style/typography/tags.css';

export default function Tags({tagsArr, category}) {
    
    return (
        <div className = "tags">
                {tagsArr && tagsArr.map((prom, i) => {
                    return <Link to = {`/${category}Tagged/${category}/${prom}`} > 
                            <div 
                                className = "tag" 
                                key = {i}
                            >
                                {prom}
                            </div>
                        </Link>
                    }
                )}
        </div>
    )
}