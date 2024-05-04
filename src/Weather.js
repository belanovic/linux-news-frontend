import React, {useState, useEffect} from 'react';

export default function Weather() {

    const [city, setCity] = useState('Belgrade');
    const [weather, setWeather] = useState('');

    const handleSelect = (e) => {
        const value = e.target.value;
        setCity(value);
    }

    async function getWeather(location) {

        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1d887415cmsh985b8cd21e3d018p1ed1ebjsn723510c1ce85',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setWeather(JSON.parse(result));
        } catch (error) {
            console.error(error);
        }
    }

   /* useEffect(() => {
        getWeather(city);
   }, [city])
   useEffect(() => {
        console.log(weather.current);
   }, [weather]) */

   
    return (
        <div className='weather'>
            <select className='city' value = {city} /* onChange={handleSelect} */>
                <option value = 'Belgrade'>Belgrade</option>
                <option value = 'Novi Sad'>Novi Sad</option>
                <option value = 'Niš'>Niš</option>
            </select>
            <div className='weather-data'>
                {/* <div className='temp'>{weather.current.temp_c && weather.current.temp_c}</div>
                <div className='temp'>{weather.current.condition.text && weather.current.condition.text}</div>
                <img className='icon' src={`https://${weather.current.condition.icon && weather.current.condition.icon}`}></img> */}

                <div className='temp'>13 
                    <sup> 0<sub>C</sub></sup>
                </div>
                <img className='icon' src={`https://cdn.weatherapi.com/weather/64x64/day/113.png`}></img>
            </div>
        </div>
    )
}