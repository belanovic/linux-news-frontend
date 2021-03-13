import React, { useState, useEffect } from 'react';
import { getFrontpageNews } from './getNews.js';

const context = React.createContext();

function Provider(props) {

    const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [dateLoaded, setDateLoaded] = useState(false);


    async function getAndSetFrontpageNews() {
        try {
            console.log('getAndSetFrontpageNews called')
            const n = await getFrontpageNews();
            n.sort((a, b) => a.position - b.position);
            console.log(n);
            console.log(typeof n[0].dateUpdated);
            setFrontpageNews(n);
            setDateLoaded(true);
        } catch (err) {
            setDateLoaded(false)
            console.log(err)
        }
    }


    useEffect(getAndSetFrontpageNews, [])
    return (
        <context.Provider value={
            {
                frontpageNews,
                setFrontpageNews,
                getAndSetFrontpageNews,
                dateLoaded,
                setDateLoaded
            }
        }>{props.children}</context.Provider>
    )
}


export { Provider, context };