import React from 'react';

export default function Navigation({navVisible}) {
    let navDisplay = navVisible? '0' : '-150%';
    return (
        <nav 
            className="navigation" 
            style = {{
                left: navDisplay
               /*  transform: 'translateY(50%)' */
            }}
        >
            <ul className="nav-list">
                <li className="nav-item"><a href={`#`} className="nav-link">Politika</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Svet</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Ekonomija</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Magazin</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Sport</a></li>
            </ul>
        </nav>
    )
}