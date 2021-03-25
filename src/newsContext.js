import React, { useState, useEffect, useContext } from 'react';
import { getFrontpageNews } from './getNews.js';

const context = React.createContext();

function Provider(props) {

    const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [dateLoaded, setDateLoaded] = useState(false);
    const [showCmsOverlay, setShowCmsOverlay] = useState('none');

    
    async function getAndSetFrontpageNews() {
        try {
            setShowCmsOverlay('block');
            console.log('getAndSetFrontpageNews called')
            const n = await getFrontpageNews();
            n.sort((a, b) => a.position - b.position);        
            setFrontpageNews(n);
            setDateLoaded(true);
            setShowCmsOverlay('none');
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
                setDateLoaded,
                showCmsOverlay, 
                setShowCmsOverlay
            }
        }>{props.children}</context.Provider>
    )
}


export { Provider, context };