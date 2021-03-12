import React, { useState, useEffect } from 'react';
import {getFrontpageNews} from './getNews.js';

const context = React.createContext();

function Provider(props) {

    const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]);

    useEffect(async () => {
        const n = await getFrontpageNews();
        n.sort((a, b) => a.position - b.position);
        setFrontpageNews(n);
    }, [])
    return (
        <context.Provider value = {
            {
                frontpageNews,
                setFrontpageNews
            }
        }>{props.children}</context.Provider>
    )
}


export {Provider, context};