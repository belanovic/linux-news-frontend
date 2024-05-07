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

                                
                               
                               {/*  <i className="fab fa-react">
                                    {numTitle == 0 && <span className='new-rocker-regular'>{'Вести'}</span>}
                                    {numTitle == 1 && <span className='jersey-10 charted-regular'>{'Вести'}</span>}
                                    {numTitle == 2 && <span className='seymour-one-regular'>{'Вести'}</span>}
                                    {numTitle == 3 && <span className='aladin-regular'>{'Вести'}</span>}
                                    {numTitle == 4 && <span className='gravitas-one-regular'>{'Вести'}</span>}
                                    {numTitle == 5 && <span className='rubik-mono one-regular'>{'Вести'}</span>}
                                    {numTitle == 6 && <span className='bangers-regular'>{'Вести'}</span>}
                                    {numTitle == 7 && <span className='sriracha-regular'>{'Вести'}</span>}
                                    {numTitle == 8 && <span className='ultra-regular '>{'Вести'}</span>}
                                    {numTitle == 9 && <span className='bungee-shade-regular'>{'Вести'}</span>}
                                    {numTitle == 10 && <span className='creepster-regular '>{'Вести'}</span>}
                                    {numTitle == 11 && <span className='rubik-moonrocks-regular'>{'Вести'}</span>}
                                    {numTitle == 12 && <span className='racing-sans one-regular '>{'Вести'}</span>}
                                    {numTitle == 13 && <span className='rye-regular '>{'Вести'}</span>}
                                    {numTitle == 14 && <span className='bowlby-one sc-regular '>{'Вести'}</span>}
                                    {numTitle == 15 && <span className='rancho-regular '>{'Вести'}</span>}
                                </i> */}
                            </h1>
                        </Link>
                    </div>
                    <div className="header-icons">
                    <div className='header-images'>
                       
                        <img className='react-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Freact3.jpg?alt=media&token=87bf5ac4-b667-4cbb-af8f-7c5b6d22c7ee'></img>
                        {/* <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fmern.jpg?alt=media&token=c268f69d-fccc-438a-a3bc-f28bf7bf6c27'></img> */}
                        <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fnode.jpg?alt=media&token=644d70ce-0acc-4b12-8b9b-384f92f02ef4'></img>
                        <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fmongo.jpg?alt=media&token=e99860c4-db68-41fa-9f24-ff2f05aa009d'></img>
                        <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fekspres.jpg?alt=media&token=33fd85e8-2b7d-48a7-943c-d9c143ff0a21'></img>
                        {/* <img className='mern-image' src='https://firebasestorage.googleapis.com/v0/b/site-news-storage.appspot.com/o/site-news-images%2Fnode1.jpg?alt=media&token=44831be2-fe19-4186-8310-8168d5f93712'></img> */}
                    </div>    
                        <div
                            className="menu-toggle"
                            onClick={handleClickMenu}
                        >
                            <i className = {`fas fa-bars ${navVisible? 'hide' : 'show'} `}></i>
                            <i className = {`fas fa-times ${navVisible? 'show' : 'hide'}`}></i>
                        </div>
                        {/* <div className="login">
                            <Link to = "/form"><i className="fas fa-user-edit" onClick = {() => setFormVisible(prev => !prev)}></i></Link>
                        </div> */}
                    </div>
                </div>
                {/* <NavigationDesk /> */}
                <NavigationMob navVisible = {navVisible} setNavVisible = {setNavVisible} />
            </div>
        </header>
    )
}