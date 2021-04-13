import react, { useState, useEffect } from 'react';
import Pulse from './Pulse.js'

export default function Covid() {

    const [covidSerbia, setCovidSerbia] = useState('');
    const [covidWorld, setCovidWorld] = useState('');
    const [covidNavigationSerbiaDisplay, setCovidNavigationSerbiaDisplay] = useState('flex')
    const [covidNavigationWorldDisplay, setCovidNavigationWorldDisplay] = useState('none');

    const handleClick = (location) => {
        if (location === 'serbia') {
            setCovidNavigationSerbiaDisplay('flex');
            setCovidNavigationWorldDisplay('none');
            return;
        }
        if (location === 'world') {
            setCovidNavigationSerbiaDisplay('none');
            setCovidNavigationWorldDisplay('flex');
            return;
        }
    }

    useEffect(async () => {
        const responseSerbia = await fetch('https://corona-api.com/countries/RS');
        const dSerbia = await responseSerbia.json();
        setCovidSerbia(dSerbia.data);
        const responseWorld = await fetch('https://corona-api.com/timeline');
        const dWorld = await responseWorld.json();
        setCovidWorld(dWorld.data);
    }, [])

    return (

        <div className="covid">
            <div className="covidTitle"><span>Koronavirus</span><Pulse /></div>
            <div className="covidNavigation">
                <div
                    className="covidNavigationItem covidNavigationSerbia"
                    onClick={() => handleClick('serbia')}
                    style={{ 
                        borderBottom: covidNavigationSerbiaDisplay === 'flex' && '3px solid red',
                        opacity: covidNavigationSerbiaDisplay === 'flex'? '1' : '0.5'
                    }}
                >Srbija
                </div>
                <div
                    className="covidNavigationItem covidNavigationWorld"
                    onClick={() => handleClick('world')}
                    style={{ 
                        borderBottom: covidNavigationWorldDisplay === 'flex' && '3px solid red',
                        opacity: covidNavigationWorldDisplay === 'flex'? '1' : '0.5'
                    }}
                >Svet
                </div>
            </div>
            <div
                className="covidSerbia"
                style={{ display: covidNavigationSerbiaDisplay }}
            >
                <div className="covidData">
                    <div className="covidDataName">Zarazeni: </div>
                <div className = "covidDataNumber">
                    <span className="covidDataNumberAll">
                        {covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].confirmed)}
                    </span>
                    <span className="covidDataNumberPlus">
                        {` (+${covidSerbia && covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].new_confirmed)})`}
                    </span>
                </div>
                </div>
                <div className="covidData">
                    <div className="covidDataName">Preminuli:</div>
                    <div className = "covidDataNumber">
                        <span className="covidDataNumberAll">
                            {covidSerbia && covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].deaths)}
                        </span>
                        <span className="covidDataNumberPlus">
                            {` (+${covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].new_deaths)})`}
                        </span>
                    </div>
                </div>
                {/* <div className="covidData">
                    <div className="covidDataName">Aktivni: </div>
                    <div className = "covidDataNumber">
                        <span className="covidDataNumberAll">{covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.latest_data.critical)}</span>
                    </div>
                </div> */}
            </div>
            <div
                className="covidWorld"
                style={{ display: covidNavigationWorldDisplay }}
            >
                <div className="covidData">
                    <div className="covidDataName">Zarazeni: </div>
                    <div className = "covidDataNumber">
                        <span className="covidDataNumberAll">
                            {covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].confirmed)}
                        </span>
                        <span className="covidDataNumberPlus">
                            {` (+${covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].new_confirmed)})`}
                        </span>
                    </div>
                </div>
                <div className="covidData">
                    <div className="covidDataName">Preminuli:</div>
                    <div className = "covidDataNumber">
                        <span className="covidDataNumberAll">{covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].deaths)}</span>
                        <span className="covidDataNumberPlus">{` (+${covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].new_deaths)})`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}