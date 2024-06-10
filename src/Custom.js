import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {context} from './newsContext.js';
import dateFormat from './dateFormat.js';
import shortenSentence from './shortenSentence.js';
import GenericThumb from './GenericThumb';
import './style/custom.css';


export default function Custom() {

    const {frontpageNews} = useContext(context);
    const defaultSetup = {
        firstArticlePosition: 15,
        count: 8,
        padding: 4,
        caption: {
            text: 'Korisno',
            size: 4,
            color: 'white',
            background: 'black',
            align: 'center'
        },
        title: {
            color: 'white'
        },
        subtitle: {
            show: true,
            color: 'white'
        },
        readMore: {
            show: true,
            color: 'white',
            background: 'rgb(122, 0, 0)'
        }
    }
    const [custom, setCustom] = useState(defaultSetup);

    function calculateFlexProperty() {
        if(custom.count < 6) {
            return `0 0 ${100 / custom.count - 1}%`
        }
        if((custom.count > 5) && (custom.count < 11)) {
            return `0 0 ${200 / custom.count - 1}%`
        }
        if((custom.count > 10) && (custom.count < 16)) {
            return `0 0 ${300 / custom.count - 1}%`
        }
    }

    function calculateFontSize(type) {
        let typeCoefficient;

        if(type == 'title') {typeCoefficient = 7}
        if(type == 'supertitle') {typeCoefficient = 5}
        if(type == 'subtitle') {typeCoefficient = 5}
        if(type == 'category') {typeCoefficient = 5}
        if(type == 'date') {typeCoefficient = 4}
        if(type == 'read-more') {typeCoefficient = 4}

        if(custom.count == 1) {
            return typeCoefficient / 2.5 + 'rem';
        }
        if(custom.count % 5 == 0) {
            return typeCoefficient / 4 + 'rem'
        }
        if(custom.count < 5) {
            return typeCoefficient / custom.count + 'rem'
        }
        if((custom.count > 5) && (custom.count < 11)) {
            return typeCoefficient / (custom.count/2) + 'rem'
            } 
        if((custom.count > 10) && (custom.count < 16)) {
            return typeCoefficient / (custom.count/3) + 'rem'
        }
    }

    const formatCathegory = (category) => {
        if (category === 'politics') return 'Politika'
        if (category === 'business') return 'Ekonomija'
        if (category === 'technology') return 'Tehnologija'
        if (category === 'entertainment') return 'Magazin'
        if (category === 'sports') return 'Sport'
    }

    function createFilter(filter) {
        if (filter) {
           return `blur(${filter[0].blur}px) brightness(${filter[0].brightness}%) 
                            contrast(${filter[0].contrast}%) grayscale(${filter[0].grayscale}%) 
                            hue-rotate(${filter[0].huRotate}deg) invert(${filter[0].invert}%) 
                            opacity(${filter[0].opacity}%) saturate(${filter[0].saturate}%) 
                            sepia(${filter[0].sepia}%)`
        } else {
            return 'none'
        }
    }

    return (
        <div className= 'custom'>
            <div className='builder'>
                <div className='builder-title'>Narpavi custom sekciju</div>
                <div
                    className='property'
                >
                    <div className='property-title'>Broj vesti u custom sekciji</div>
                    <input 
                        className='property-input'
                        type='number'
                        min={1}
                        max={15}
                        value = {custom.count}
                        onChange={(e)=> setCustom((prev) => {
                            prev.count = e.target.value;
                            return {...prev}
                        }) }
                    ></input>
                </div>
                <div
                    className='property'
                >
                    <div className='property-title'>Padding</div>
                    <input 
                        className='property-input'
                        type='number'
                        min={1}
                        max={30}
                        value = {custom.padding}
                        onChange={(e)=> setCustom((prev) => {
                            prev.padding = e.target.value;
                            return {...prev}
                        }) }
                    ></input>
                </div>
                <div
                    className='property'
                >
                    <div className='property-title'>Pozicija prve vesti</div>
                    <input 
                        className='property-input'
                        type='number'
                        min={1}
                        max={frontpageNews.length}
                        value = {custom.firstArticlePosition}
                        onChange={(e)=> setCustom((prev) => {
                            prev.firstArticlePosition = e.target.value;
                            return {...prev}
                        }) }
                    ></input>
                </div>
                <div
                    className='property'
                >
                    <div className='property-title'>Podesi naslov sekcije</div>
                    <div className='property-item'>
                        <div className='property-item-title'>Naslov</div>                    
                        <input 
                            className='property-input'
                            type='text'                        
                            value = {custom.caption.text}
                            onChange={(e)=> setCustom((prev) => {
                                prev.caption.text = e.target.value;
                                return {...prev}
                            }) }
                        ></input>
                    </div>
                    <div className='property-item'> 
                        <div className='property-item-title'>Boja teksta naslova</div>                    
                        <input 
                            className='property-input'
                            type='color'                        
                            value = {custom.caption.color}
                            onChange={(e)=> setCustom((prev) => {
                                prev.caption.color = e.target.value;
                                return {...prev}
                            }) }
                        ></input>
                    </div>
                    <div className='property-item'>
                        <div className='property-item-title'>Boja pozadine</div>                     
                        <input 
                            className='property-input'
                            type='color'                        
                            value = {custom.caption.background}
                            onChange={(e)=> setCustom((prev) => {
                                prev.caption.background = e.target.value;
                                return {...prev}
                            }) }
                        ></input>
                    </div>
                    <div className='property-item'> 
                        <div className='property-item-title'>Veličina</div>                    
                        <input 
                            className='property-input'
                            type='number'
                            min = {1}                    
                            max = {30}                    
                            value = {custom.caption.size}
                            onChange={(e)=> setCustom((prev) => {
                                prev.caption.size = e.target.value;
                                return {...prev}
                            }) }
                        ></input>
                    </div>
                </div>
                </div>
            <div 
                className='custom-title'
                style={{
                    fontSize: `${custom.caption.size}rem`,
                    padding: '0.5em 0.5em 0em 0.5em',
                    color: custom.caption.color,
                    background: custom.caption.background,
                    textAlign: custom.caption.align
                }}
            >{custom.caption.text}
            </div>
            <div 
                className='custom-articles'
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: custom.count > 5? 'wrap' : 'nowrap',
                    backgroundColor: 'black',
                    padding: custom.padding + 'em',
                    paddingBottom: '0'
                }}
            >
                {frontpageNews.map((article, i) => {

                if((i < custom.firstArticlePosition - 1) || (i > (custom.firstArticlePosition - 1) + (custom.count - 1))) return
                return <div 
                    className={`card card-custom ${i == custom.firstArticlePosition - 1? 'first' : ''}`}
                    style = {{
                        flex: calculateFlexProperty(),
                        position: 'relative',
                        display: custom.count == 1? 'flex' : 'block',
                        marginBottom: /* (i == custom.firstArticlePosition - 1) && custom.count > 5?  */'5em'
                    }}
                >
                    {article.supertitle && <div 
                        className={`card-custom-container-supertitle`}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            top: '0px',
                            zIndex: 1
                            
                        }}
                    >
                        <div 
                            className={`card-custom-supertitle`}
                            style={{
                                display: 'inline-block',
                                padding: '0.3em 0.7em',
                                color: 'white',
                                fontSize: calculateFontSize('supertitle'),
                                fontWeight: 'bold',
                                background: 'linear-gradient(180deg, rgb(255, 49, 49), rgb(0, 0, 0))'
                            }}
                        >{article.supertitle}
                        </div>
                    </div>}
                    {article.imgURL && <div 
                        className={`card-custom-container-img`}
                        style = {{
                            position: 'relative',
                            overflow: 'hidden',
                            flex: '0 0 60%'
                        }}
                    >
                        <Link 
                            style = {{
                                display: 'inline-block',
                                width: '100%',
                                height: '100%'
                            }} 
                            to={`/article/${article._id}`}
                        >
                            {article.videoURL && (article.videoURL !== 'none') && <div className="play"><i className="far fa-play-circle"></i></div>}
                            {(article.imgURL == 'generic')?
                                <GenericThumb 
                                    className={`card-img card-custom-img`}
                                    thumbShape = 'wide'
                                    category={article.category} 
                                    isCustom = {true}
                                />
                                :
                                <img className={`card-img card-custom-img`}
                                    style = {{
                                        width: '100%',
                                     
                                        objectFit: 'cover',
                                        filter: createFilter(article.imgFilter)
                                    }}
                                    src={article.imgURL}
                                >
                                </img>}
                        </Link>
                    </div>}
                    {(article.title || article.subtitle) && <div 
                        className={`card-custom-text`}
                        style={{
                            width: '100%',
                            padding: custom.count == 1?'1em 1em 1em 2em' : '1em 1em 1em 0em',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        {article.title && <div className={`card-custom-container-title`}>
                            <Link to={`/article/${article._id}`}>
                                <div 
                                    className={`card-custom-title`}
                                    style={{
                                        marginBottom: '0.25em',
                                        marginTop: '0em',
                                        color: custom.title.color,
                                        fontSize: calculateFontSize('title'),
                                        lineHeight: 1.25,
                                        letterSpacing: '1px',
                                        transition: 'color 0.25s'
                                        
                                    }}
                                >
                                    {shortenSentence(article.title, 170)}
                                </div>
                            </Link>
                        </div>}
                        {(article.category || article.datePublished || article.dateUpdated) && <div 
                            className={`card-custom-info`}
                            style={{
                                order: -1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '0.5em',
                                color: 'white'
                            }}
                        >
                            {article.category && <div 
                                className='card-info-category'
                                style={{
                                    display: 'inline-block'
                                }}
                            ><Link 
                                to={`/article/${article._id}`}
                                style={{
                                    color: 'rgb(61, 170, 237)',
                                    fontSize: calculateFontSize('category'),
                                    fontFamily: 'sans-serif, Arial, Helvetica',
                                    textTransform: 'uppercase'
                                }}
                            >{formatCathegory(article.category)} /
                            </Link> 
                            </div>}
                            <div 
                                className={`card-info-date`}
                                style = {{
                                    fontSize: calculateFontSize('date'),
                                    textTransform: 'capitalize',
                                    color: 'black'
                                    
                                }}
                            >
                                {article.datePublished && <span className="date datePublished" >
                                    {article.datePublished ? dateFormat(article.datePublished, 'clock', 'comma', 'month', 'dayMonth') : ''}
                                </span>}                            
                            </div>
                        </div>}
                        {custom.subtitle.show && <div className={`card-custom-container-subtitle`}>
                           
                                <p
                                    className={`card-custom-subtitle`}
                                    style={{
                                        fontSize: calculateFontSize('subtitle'),
                                        color: custom.subtitle.color,
                                        lineHeight: 1.5
                                    }}
                                >
                                    {shortenSentence(article.subtitle, 120)}
                                </p>
                           
                        </div>}
                        {custom.readMore.show && <div 
                            className='read-more'
                            style = {{
                                order: '2'
                            }}
                        > <Link 
                            to={`/article/${article._id}`}
                            style = {{
                                display: 'inline-block',
                                padding: '0.5em 2em 0.5em 2em',
                                background: custom.readMore.background,
                                transition: 'all 0.25s',
                                color: custom.readMore.color,
                                fontSize: calculateFontSize('read-more')
                            }}
                        >Pročitaj</Link>
                        </div>}
                    </div>}
                </div>
                })}
            </div>
        </div>
    )
}