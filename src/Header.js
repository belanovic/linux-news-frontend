import React, { useState, useContext, useEffect } from 'react';
import NavigationMob from './NavigationMob.js';
import NavigationDesk from './NavigationDesk.js';
import NewsTicker1 from './NewsTicker1.js';
import NewsTicker from './NewsTicker';
import {Link} from 'react-router-dom';
import {context} from './newsContext.js';
import './style/layout/header.css';
import './style/typography/header.css';

export default function Header() {
    const {getAndSetFrontpageNews, alphabet, navVisible, 
        setNavVisible, setFormVisible, frontpageNews} = useContext(context);

    const handleClickMenu = () => {
        setNavVisible(prev => !prev);
    }

    const [numTitle, setNumTitle] = useState(0);
 
    return (
        <header className="header">
               
            <div className="container header-container">
                {/* <button onClick={() => setNumTitle((prev) => prev - 1) }>dole</button>
                <button onClick={() => setNumTitle((prev) => prev + 1) }>gore</button> */}    
                <div className="header-box">
                    <div className="header-title">
                        <Link to = '/'>
                            <h1 className="title" onClick = {() => getAndSetFrontpageNews()}>
                               
                                 <img style = {{display: numTitle == 0? 'block' : 'none'}} className='title-img' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fvesti2.png?alt=media&token=dc60acff-4ce3-44ac-9174-1a7db4de5ca1'></img>
            
                                <img style = {{display: numTitle == 1? 'block' : 'none'}} className='title-img' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fvesti6.png?alt=media&token=739b833b-bdf5-4308-9435-0c1cab9466d2'></img>
                                <img style = {{display: numTitle == 2? 'block' : 'none'}} className='title-img' src='https://r74.cooltext.com/rendered/cooltext457665053425105.png'></img>

                            </h1>
                        </Link>
                    </div>
                    <div className="header-icons">
                        <div className='header-images'>

                            <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fmern.jpg?alt=media&token=c268f69d-fccc-438a-a3bc-f28bf7bf6c27'></img>
                            <img className='one-tech react-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Freact1.png?alt=media&token=cbda3e14-ffa9-4c6f-a8fe-8d7e04436af6'></img>
                            <img className='one-tech express-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fekspres.jpg?alt=media&token=33fd85e8-2b7d-48a7-943c-d9c143ff0a21'></img>
                            <img className='one-tech node-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Fnode1.png?alt=media&token=54b0f739-56b7-4580-afef-ecd2e90ee223'></img>
                            <img className='one-tech mongodb-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fmongo.jpg?alt=media&token=e99860c4-db68-41fa-9f24-ff2f05aa009d'></img>
                            <img className='one-tech linux-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fthumbs%2Flinux3.jpg?alt=media&token=d9faaf5b-70b9-4a25-aba9-22968d119f59'></img>
                            
                        </div>
                        {/* <div
                            className="menu-toggle"
                            onClick={handleClickMenu}
                        >
                            <i className = {`fas fa-bars ${navVisible? 'hide' : 'show'} `}></i>
                            <i className = {`fas fa-times ${navVisible? 'show' : 'hide'}`}></i>
                        </div> */}
                        {/* <div className="login">
                            <Link to = "/form"><i className="fas fa-user-edit" onClick = {() => setFormVisible(prev => !prev)}></i></Link>
                        </div> */}
                    </div>
                </div>
                {/* <NavigationDesk /> */}
                {/* <NavigationMob navVisible = {navVisible} setNavVisible = {setNavVisible} /> */}
            </div>
        </header>
    )
}