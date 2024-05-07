import React, { useState, useEffect, useContext } from 'react';
import { getFrontpageNews } from './getNews.js';

const context = React.createContext();

let defaultFrontpageNews = [];
for(let i = 0; i < 100; i++) {defaultFrontpageNews.push(i)}

function Provider(props) {
    const [frontpageNews, setFrontpageNews] = useState(defaultFrontpageNews);
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
            /* setFrontpageNews([]); */
            setFrontpageNews(n);
        } catch (error) {
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