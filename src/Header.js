import React, { useState } from 'react';
import Navigation from './Navigation.js';
import {Link} from 'react-router-dom';

export default function Header() {
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
                    <Link to = '/'><h1 className="title">Vesti</h1></Link>
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