import react, {useState, useEffect, useRef, useContext} from 'react';
import {Link} from 'react-router-dom';
import {context} from './newsContext';

import './style/layout/news-ticker.css';
import './style/typography/news-ticker.css';

export default function NewsTicker1({frontpageNews}) {

    const {alphabet} = useContext(context);

    /* const [distanceFromRight, setDistanceFromRight] = useState(0);

    useEffect(() => {

        let counter = 0;
        const sliding = setInterval(() => {
  
            setDistanceFromRight(prev => prev - 0.005);
            counter = counter - 0.005;

            if(counter < -100) {
                setDistanceFromRight(0);
                counter = 0;
            }
        }, 6)
        return () => {
            clearInterval(sliding);
        }
    }, []) */
/* 
    useEffect(() => {
        console.log(distanceFromRight)
    }, [distanceFromRight]) */
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        setDuration((prev) => {
            if(frontpageNews[5].title) {
                const length = frontpageNews[5].title.length +
                frontpageNews[0].title.length + 
                frontpageNews[1].title.length + 
                frontpageNews[2].title.length + 
                frontpageNews[3].title.length + 
                frontpageNews[4].title.length + 
                frontpageNews[5].title.length +
                frontpageNews[0].title.length
  
                return length/10
            } else {
                return 0
            }
            
        }) 
    }, [frontpageNews])
    return (
        <div className = "newsTicker1">
            <div 
                className = "newsTicker1Container"
                style = {{
                    animationDuration: `${duration}s`
                }}
            >
                <Link to={`/article/${frontpageNews[5]._id}`}><div className = "tickerTitle">{frontpageNews[5].title}</div></Link>
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
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
            </div>
        </div>
    )
}