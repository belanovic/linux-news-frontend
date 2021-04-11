import react, { useState, useEffect } from 'react';

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
                    onClick={() => handleClick('serbia')}
                    style={{ borderBottom: covidNavigationSerbiaDisplay === 'flex' && '3px solid red' }}
                >Srbija
                </div>
                <div
                    className="covidNavigationItem covidNavigationWorld"
                    onClick={() => handleClick('world')}
                    style={{ borderBottom: covidNavigationWorldDisplay === 'flex' && '3px solid red' }}
                >Svet
                </div>
            </div>
            <div
                className="covidSerbia"
                style={{ display: covidNavigationSerbiaDisplay }}
            >
                <div className="covidData">
                    <div className="covidDataName">Zarazeni: </div>
                    <span className="covidDataNumber">{covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].confirmed)}</span>
                    <span className="covidDataNumber">{` (+ ${covidSerbia && covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].new_confirmed)})`}</span>
                </div>
                <div className="covidData">
                    <div className="covidDataName">Preminuli:</div>
                    <span className="covidDataNumber">{covidSerbia && covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].deaths)}</span>
                    <span className="covidDataNumber">{` (+ ${covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.timeline[0].new_deaths)})`}</span>
                </div>
                <div className="covidData">
                    <div className="covidDataName">Aktivni: </div>
                    <span className="covidDataNumber">{covidSerbia && new Intl.NumberFormat('sr-SR').format(covidSerbia.latest_data.critical)}</span>
                </div>
            </div>
            <div
                className="covidWorld"
                style={{ display: covidNavigationWorldDisplay }}
            >
                <div className="covidData">
                    <div className="covidDataName">Zarazeni: </div>
                    <span className="covidDataNumber">{covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].confirmed)}</span>
                    <span className="covidDataNumber">{` (+ ${covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].new_confirmed)})`}</span>
                </div>
                <div className="covidData">
                    <div className="covidDataName">Preminuli:</div>
                    <span className="covidDataNumber">{covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].deaths)}</span>
                    <span className="covidDataNumber">{` (+ ${covidWorld && new Intl.NumberFormat('sr-SR').format(covidWorld[0].new_deaths)})`}</span>
                </div>
            </div>
        </div>
    )
}