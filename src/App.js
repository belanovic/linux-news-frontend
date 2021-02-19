import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Article from './Article.js';
import {Switch, Route} from 'react-router-dom';

import BootstrapCarousel from './BootstrapCarousel.js';

export default function App() {    
    return (
        <div className = "wrapper">

            <Header />
            <Switch>
                <Route exact path = "/"><Main /></Route>
                <Route path = "/article/:id"><Article /></Route>
            </Switch>
            <Footer />
            
        </div>
    )
}