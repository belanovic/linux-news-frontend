import React, {useState, useContext} from 'react';
import {context} from './newsContext.js';

export default function Navigation({navVisible, setNavVisible}) {

    let navDisplay = navVisible? '0' : '-150%';

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
            style = {{left: navDisplay}}
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
                <li className="nav-item"><a href={`#`} className="nav-link">Politika</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Svet</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Ekonomija</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Magazin</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Sport</a></li>
            </ul>
        </nav>
    )
}