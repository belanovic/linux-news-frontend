import React, {useState, useContext} from 'react';
import {context} from './newsContext.js';
import {Link} from 'react-router-dom';

export default function Navigation({navVisible, setNavVisible}) {

    const {alphabet, setAlphabet} = useContext(context);

    const handleClickCir = (e) => {
        setAlphabet('cirilica');
        setNavVisible(false);
    }
    const handleClickLat = (e) => {
        setAlphabet('latinica');
        setNavVisible(false);
    }

    return (
        <nav 
            className="navigation" 
            style = {{left: navVisible? '0' : '-150%'}}
        >
            <ul className="nav-list">
                <li className="nav-item">
                    <div className = "alphabet-container">
                        <div 
                            className = "cirilica" 
                            onClick = {handleClickCir}
                            style = {{
                                color: alphabet === 'cirilica'? 'white' : 'rgb(200, 200, 200)'
                            }}
                        >Ћир</div>
                        <div 
                            className = "latinica" 
                            onClick = {handleClickLat}
                            style = {{
                                color: alphabet === 'latinica'? 'white' : 'rgb(180, 180, 180)'
                            }}
                        >Lat</div>
                    </div>
                </li>
                <Link to = '/politics/politics'><li className="nav-item" onClick = {() => setNavVisible(false)}><span className="nav-link">Politika</span></li></Link>
                <Link to = '/technology/technology'><li className="nav-item" onClick = {() => setNavVisible(false)}><span className="nav-link">Svet</span></li></Link> 
                <Link to = '/business/business'><li className="nav-item" onClick = {() => setNavVisible(false)}><span className="nav-link">Ekonomija</span></li></Link> 
                <Link to = '/entertainment/entertainment'><li className="nav-item" onClick = {() => setNavVisible(false)}><span className="nav-link">Magazin</span></li></Link> 
                <Link to = '/sports/sports'><li className="nav-item" onClick = {() => setNavVisible(false)}><span className="nav-link">Sport</span></li></Link> 
            </ul>
        </nav>
    )
}