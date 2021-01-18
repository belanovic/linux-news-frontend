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
            </ul>
        </nav>
    )
}