import React, { useState, useEffect, useContext } from 'react';
import { getFrontpageNews } from './getNews.js';

const context = React.createContext();

function Provider(props) {

    const [frontpageNews, setFrontpageNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [dateLoaded, setDateLoaded] = useState(false);
    const [showSiteOverlay, setShowSiteOverlay] = useState('none');
    const [alphabet, setAlphabet] = useState('cirilica');
    const [navVisible, setNavVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('recent');
    const [activeCategory, setActiveCategory] = useState('');
    
    async function getAndSetFrontpageNews() {
        try {
            setShowSiteOverlay('flex');
            const n = await getFrontpageNews();
            setShowSiteOverlay('none');
            n.sort((a, b) => a.position - b.position);
            setFrontpageNews(n);
            setDateLoaded(true);
        } catch (error) {
            setDateLoaded(false)
            alert(error.message);
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
                showSiteOverlay,
                setShowSiteOverlay,
                alphabet,
                setAlphabet,
                navVisible, 
                setNavVisible,
                formVisible, 
                setFormVisible,
                activeTab, 
                setActiveTab,
                activeCategory, 
                setActiveCategory

            }
        }>{props.children}</context.Provider>
    )
}

export { Provider, context };