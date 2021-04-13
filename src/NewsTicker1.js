import react, {useState, useEffect, useRef} from 'react';

export default function NewsTicker1({frontpageNews}) {

    const [distanceFromRight, setDistanceFromRight] = useState(0);

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
    }, [])
/* 
    useEffect(() => {
        console.log(distanceFromRight)
    }, [distanceFromRight]) */
    return (
        <div className = "newsTicker1">
            <div 
                className = "newsTicker1Container"
                style = {{
                    transform: `translateX(${distanceFromRight}%)`
                }}
            >
                <div className = "tickerTitle">{frontpageNews[5].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[0].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[1].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[2].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[3].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[4].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[5].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
                <div className = "tickerTitle">{frontpageNews[0].title}</div>
                <div className = "tickerStars"><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i><i className="fas fa-asterisk"></i></div>
            </div>
        </div>
    )
}