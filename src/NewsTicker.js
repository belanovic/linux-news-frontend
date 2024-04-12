import React, {useState} from 'react';
import Ticker from 'react-ticker'
import {Link} from 'react-router-dom';
import {context} from './newsContext';

import './style/layout/news-ticker.css';
import './style/typography/news-ticker.css';
 
function NewsTicker({frontpageNews}) {

    return (<Ticker>
        {({ index }) => (
            <> 
                <h1 className = "tickerTitle">vxvxxcv</h1>
                <h1 className = "tickerTitle">ssssssssss</h1>
                <h1 className = "tickerTitle">iiiiiiiiii</h1>
               {/*  <h1 className = "tickerTitleLink to={`/article/${frontpageNews[1]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1>
                <h1 className = "tickerTitle"><Link to={`/article/${frontpageNews[2]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1>
                <h1 className = "tickerTitle"><Link to={`/article/${frontpageNews[0]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1>
                <h1 className = "tickerTitle"><Link to={`/article/${frontpageNews[3]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1>
                <h1 className = "tickerTitle"><Link to={`/article/${frontpageNews[4]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1>
                <h1 className = "tickerTitle"><Link to={`/article/${frontpageNews[5]._id}`}><div className = "">{frontpageNews[5].title}</div></Link></h1> */}
              {/*   <Link to={`/article/${frontpageNews[5]._id}`}><div className = "tickerTitle">{frontpageNews[5].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[1]._id}`}><div className = "tickerTitle">{frontpageNews[1].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[2]._id}`}><div className = "tickerTitle">{frontpageNews[2].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[3]._id}`}><div className = "tickerTitle">{frontpageNews[3].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[4]._id}`}><div className = "tickerTitle">{frontpageNews[4].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[5]._id}`}><div className = "tickerTitle">{frontpageNews[5].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <Link to={`/article/${frontpageNews[0]._id}`}><div className = "tickerTitle">{frontpageNews[0].title}</div></Link>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div> */}
            </>
        )}
    </Ticker>)
}
 
export default NewsTicker