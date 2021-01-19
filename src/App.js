import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import BootstrapCarousel from './BootstrapCarousel.js';

export default function App() {    
    return (
        <div className = "wrapper">

            <Header />
            <Main />
            <Footer />
            
        </div>
    )
}