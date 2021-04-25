import React, { useState, useContext } from 'react';
import Navigation from './Navigation.js';
import {Link} from 'react-router-dom';
import {context} from './newsContext.js';
import cirilizatorDecirilizator from './cirilizatorDecirilizator.js';
import Form from './Form.js';

export default function Header() {
    const {getAndSetFrontpageNews, alphabet, navVisible, 
        setNavVisible, setLoginIsVisible, setFormVisible} = useContext(context);

    const handleClickMenu = () => {
        setNavVisible(prev => !prev);
    }
 
    let barsDisplay = navVisible?  'none' : 'inline';
    let timesDisplay = navVisible? 'inline' : 'none';

    return (
        <header className="header">
               
            <div className="container header-container">
                <div className="titleBox">
                    <Link to = '/'>
                        <h1 className="title" onClick = {() => getAndSetFrontpageNews()}>
                        <i className="fab fa-react"></i>
                            {cirilizatorDecirilizator(alphabet, 'Vesti')}
                        </h1>
                    </Link>
                    <div className="header-icons">
                        <div
                            className="menuToggle"
                            onClick={handleClickMenu}
                        >
                            <i className="fas fa-bars" style = {{display: barsDisplay}}></i>
                            <i className="fas fa-times" style = {{display: timesDisplay}}></i>
                        </div>
                        <div className="login">
                            <Link to = "/form"><i className="fas fa-user-edit" onClick = {() => setFormVisible(prev => !prev)}></i></Link>
                        </div>
                    </div>
                </div>
                <Navigation navVisible = {navVisible} setNavVisible = {setNavVisible} />
            </div>
        </header>
    )
}