import react, { useState, useEffect } from 'react';

export default function Covid() {
    const [covidSerbia, setCovidSerbia] = useState('');
    const [covidWorld, setCovidWorld] = useState('');
    const [covidNavigationSerbiaDisplay, setCovidNavigationSerbiaDisplay] = useState('block')
    const [covidNavigationWorldDisplay, setCovidNavigationWorldDisplay] = useState('none');

    const handleClick = (location) => {
        if(location === 'serbia') {
            setCovidNavigationSerbiaDisplay('block');
            setCovidNavigationWorldDisplay('none');
            return;
        }
        if(location === 'world') {
            setCovidNavigationSerbiaDisplay('none');
            setCovidNavigationWorldDisplay('block');
            return;
        }
    }

    useEffect(async () => {
        const responseSerbia = await fetch('https://corona-api.com/countries/RS');
        const dSerbia = await responseSerbia.json();
        console.log(dSerbia.data)
        setCovidSerbia(dSerbia.data);
        const responseWorld = await fetch('https://corona-api.com/timeline');
        const dWorld = await responseWorld.json();
        console.log(dWorld.data);
        setCovidWorld(dWorld.data);
    }, [])
    return (

        <div className="covid">
            <div className="covidTitle">Koronavirus</div>
            <div className="covidNavigation">
                <div 
                    className="covidNavigationItem covidNavigationSerbia"
                    onClick = {() => handleClick('serbia')}
                    style = {{borderBottom: covidNavigationSerbiaDisplay === 'block' && '3px solid red'}}
                >Srbija
                </div>
                <div
                    className="covidNavigationItem covidNavigationWorld"
                    onClick = {() => handleClick('world')}
                    style = {{borderBottom: covidNavigationWorldDisplay === 'block' && '3px solid red'}}
                >Svet
                </div>
            </div>
            <div 
                className="covidSerbia"
                style={{ display: covidNavigationSerbiaDisplay }}
            >
            {covidSerbia && covidSerbia.latest_data.deaths}   
            </div>
            <div 
                className="covidWorld"
                style={{ display: covidNavigationWorldDisplay }}
            >
            {covidWorld && covidWorld[0].deaths}
            </div>
        </div>
    )
}