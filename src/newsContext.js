import React, { useState, useEffect, useContext } from 'react';
import { getFrontpageNews, getSettings } from './getNews.js';

const context = React.createContext();

let defaultFrontpageNews = [];
for(let i = 0; i < 100; i++) {defaultFrontpageNews.push(i)}

function Provider(props) {
    const [settings, setSettings] = useState('');
    const [frontpageNews, setFrontpageNews] = useState(defaultFrontpageNews);
    const [showSiteOverlay, setShowSiteOverlay] = useState('none');
    const [alphabet, setAlphabet] = useState('cirilica');
    const [navVisible, setNavVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('recent');
    const [activeCategory, setActiveCategory] = useState('');
    const [backgroundHeader, setBeckgroundHeader] = useState('linear-gradient(180deg, #970000, #000000)');
    
    async function getAndSetFrontpageNews() {
        try {
            setShowSiteOverlay('flex');
            const n = await getFrontpageNews();
            setShowSiteOverlay('none');
            n.sort((a, b) => a.position - b.position);
            setFrontpageNews(n);
        } catch (error) {
            
        }
    }


    useEffect(() => {
        if(settings) setBeckgroundHeader(`linear-gradient(${settings.colors.headerColor[0]}deg, ${settings.colors.headerColor[1]}, ${settings.colors.headerColor[2]})`);
    }, [settings])

    useEffect(async () => {
        try {
            await getAndSetFrontpageNews();
        
            setShowSiteOverlay('flex');
            const settingsMsg = await getSettings();
            setShowSiteOverlay('none');
      
            if(settingsMsg == null) {
                setSettings('');
            }
            if(settingsMsg.isSuccess) {
                setSettings(settingsMsg.settings);
            }
        } catch (error) {
            
        }

    }, [])

    /* useEffect(() => {console.log(settings)}, [settings]) */

    return (
        <context.Provider value={
            {   settings,
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
                setActiveCategory,
                backgroundHeader

            }
        }>{props.children}</context.Provider>
    )
}

export { Provider, context };