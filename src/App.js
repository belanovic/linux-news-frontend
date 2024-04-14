import React, {useRef, useContext} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Article from './Article.js';
import Category from './Category.js';
import {Switch, Route} from 'react-router-dom';
import {context} from './newsContext';
import NewsTicker1 from './NewsTicker1.js';
import Form from './Form';

export default function App() {
    const cmsOverlay = useRef(null);  
    const {showSiteOverlay, setShowSiteOverlay} = useContext(context);
    return (   
        <div className = "wrapper"> 
            <div className = "siteOverlay" ref = {cmsOverlay} style = {{display: showSiteOverlay}}></div>
            <Header />
            <Switch> 

                <Route exact path = "/"><Main /></Route> 

                <Route path = "/article/:id"><Article /></Route>  

                <Route path = "/politics/:category"><Category key = {1} /></Route>
                <Route path = "/technology/:category"><Category key = {2}/></Route>
                <Route path = "/business/:category"><Category key = {3}/></Route>
                <Route path = "/entertainment/:category"><Category key = {4}/></Route>
                <Route path = "/sports/:category"><Category key = {5}/></Route>
                
                <Route path = "/form"><Form /></Route> 


            </Switch>

            <Footer />
            
        </div>
    )
}
                