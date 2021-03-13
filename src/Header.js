import React, { useState, useContext } from 'react';
import Navigation from './Navigation.js';
import {Link} from 'react-router-dom';
import {context} from './newsContext.js';

export default function Header() {
    const {getAndSetFrontpageNews} = useContext(context);
    const [navVisible, setNavVisible] = useState(false);

    const handleClick = () => {
        setNavVisible(prev => !prev);
    }

    let barsDisplay = navVisible?  'none' : 'inline';
    let timesDisplay = navVisible? 'inline' : 'none';

    return (
        <header className="header">
            <div className="container header-container">
                <div className="titleBox">
                    <Link to = '/'><h1 className="title" onClick = {() => getAndSetFrontpageNews()}>Vesti</h1></Link>
                    <div
                        className="menuToggle"
                        onClick={handleClick}
                    >
                        <i className="fas fa-bars" style = {{display: barsDisplay}}></i>
                        <i className="fas fa-times" style = {{display: timesDisplay}}></i>
                    </div>
                </div>
                <Navigation navVisible = {navVisible} />
            </div>
        </header>
    )
}