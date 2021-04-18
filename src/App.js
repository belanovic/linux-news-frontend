import React, {useRef, useContext} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Article from './Article.js';
import Cathegory from './Cathegory.js';
import {Switch, Route} from 'react-router-dom';
import {context} from './newsContext';
import NewsTicker1 from './NewsTicker1.js';

export default function App() {
    const cmsOverlay = useRef(null);
    const {showCmsOverlay, setShowCmsOverlay} = useContext(context);
    return (
        <div className = "wrapper">
            <div className = "cmsOverlay" ref = {cmsOverlay} style = {{display: showCmsOverlay}}></div>
            <Header />
            <Switch>
                <Route exact path = "/"><Main /></Route>
                <Route path = "/article/:id"><Article /></Route>
                <Route path = "/cathegory/:cathegory"><Cathegory /></Route>
            </Switch>
            <Footer />
            
        </div>
    )
}