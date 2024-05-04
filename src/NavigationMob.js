import React, {useState, useContext} from 'react';
import {context} from './newsContext.js';
import {Link} from 'react-router-dom';
import './style/navigationMob.css';

export default function NavigationMob({navVisible, setNavVisible}) {

    return (
        <nav 
            className="navigationMob" 
            style = {{left: navVisible? '0' : '-150%'}}
        >
            <ul className="navMob-list">
            
                <Link to = '/politics/politics'><li className="navMob-item" onClick = {() => setNavVisible(false)}><span className="navMob-link">Politika</span></li></Link>
                <Link to = '/business/business'><li className="navMob-item" onClick = {() => setNavVisible(false)}><span className="navMob-link">Ekonomija</span></li></Link> 
                <Link to = '/technology/technology'><li className="navMob-item" onClick = {() => setNavVisible(false)}><span className="navMob-link">Tehnologija</span></li></Link> 
                <Link to = '/entertainment/entertainment'><li className="navMob-item" onClick = {() => setNavVisible(false)}><span className="navMob-link">Magazin</span></li></Link> 
                <Link to = '/sports/sports'><li className="navMob-item" onClick = {() => setNavVisible(false)}><span className="navMob-link">Sport</span></li></Link> 
            </ul>
        </nav>
    )
}