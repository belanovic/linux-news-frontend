import react, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

export default function NewsTicker1({frontpageNews}) {

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
    return (
        <div className = "newsTicker1">
            <div 
                className = "newsTicker1Container"
                /* style = {{
                    transform: `translateX(${distanceFromRight}%)`
                }} */
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