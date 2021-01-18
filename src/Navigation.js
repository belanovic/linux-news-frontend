import React from 'react';

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item"><a href={`#`} className="nav-link">Politika</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Svet</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Ekonomija</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Magazin</a></li>
                <li className="nav-item"><a href={`#`} className="nav-link">Sport</a></li>
                <li className=""><a href={`#`} className="nav-link">innerHeight: {window.innerHeight}</a></li>
                <li className=""><a href={`#`} className="nav-link">inner Widht: {window.innerWidth}</a></li>
                <li className=""><a href={`#`} className="nav-link">outerHeight: {window.outerHeight}</a></li>
                <li className=""><a href={`#`} className="nav-link">outerWidht: {window.outerWidth}</a></li>
            </ul>
        </nav>
    )
}