import React, {useRef, useContext} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Article from './Article.js';
import Cathegory from './Cathegory.js';
import {Switch, Route} from 'react-router-dom';
import {context} from './newsContext';
import NewsTicker1 from './NewsTicker1.js';
import Form from './Form'

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

                <Route path = "/politics/:cathegory"><Cathegory key = {1} /></Route>
                <Route path = "/technology/:cathegory"><Cathegory key = {2}/></Route>
                <Route path = "/business/:cathegory"><Cathegory key = {3}/></Route>
                <Route path = "/entertainment/:cathegory"><Cathegory key = {4}/></Route>
                <Route path = "/sports/:cathegory"><Cathegory key = {5}/></Route>
                
                <Route path = "/form"><Form /></Route> 


            </Switch>

            <Footer />
            
        </div>
    )
}
                