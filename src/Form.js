import react, { useState, useEffect, useContext } from 'react';
import cirilizatorDecirilizator from './cirilizatorDecirilizator.js';
import { context } from './newsContext';
import './styleForm.css';

export default function Form() {

    const { alphabet } = useContext(context);

    const [signInisActive, setSignInIsActive] = useState(true);
    const [signUpisActive, setSignUpIsActive] = useState(false);


    const handleClickSend = (e) => {
        e.preventDefault()
    }
    const handleClickTab = (tab) => {
        if (tab === 'sign-up') {
            setSignUpIsActive(true);
            setSignInIsActive(false);
        } else if(tab === 'sign-in') {
            setSignUpIsActive(false);
            setSignInIsActive(true);
        }        
    }

    return (
        <>
            <div className="form-container">
                <div className="form-around2">
                    <div className="form-around1">
                        <form className="form">
                            <div className="form-title">
                                <span 
                                    className= {`proba sign-in ${signInisActive? 'isActive' : 'notActive'}`}
                                    onClick = {() => handleClickTab('sign-in')}
                                >{cirilizatorDecirilizator(alphabet, 'Prijava')}</span>
                                <span 
                                    className= {`sign-up ${signUpisActive? 'isActive' : 'notActive'}`}
                                    onClick = {() => handleClickTab('sign-up')}
                                >{cirilizatorDecirilizator(alphabet, 'Registracija')}</span>
                            </div>

                            <div 
                                className="form-element firstName"
                                style = {{display: signUpisActive? 'block' : 'none'}}
                            >
                                <label htmlFor="firstName" className="firstName-label">{cirilizatorDecirilizator(alphabet, 'Ime')}</label>
                                <input id="firstName" className="firstName-input" type="text"></input>
                            </div>

                            <div 
                                className="form-element lastName"
                                style = {{display: signUpisActive? 'block' : 'none'}}
                            >
                                <label htmlFor="lastName" className="lastName-label">{cirilizatorDecirilizator(alphabet, 'Prezime')}</label>
                                <input id="lastName" className="lastName-input" type="text" ></input>
                            </div>

                            <div className="form-element username">
                                <label htmlFor="username" className="username-label">{cirilizatorDecirilizator(alphabet, 'Korisničko ime')}</label>
                                <input id="username" className="username-input" type="text"></input>
                            </div>

                            <div className="form-element pasword">
                                <label htmlFor="password" className="pasword-label">{cirilizatorDecirilizator(alphabet, 'Šifra')}</label>
                                <input id="username" className="pasword-input" type="text" ></input>
                            </div>

                            <div 
                                className="form-element email"
                                style = {{display: signUpisActive? 'block' : 'none'}}
                            >
                                <label htmlFor="username" className="email-label">e-mail</label>
                                <input id="username" className="email-input" type="email"></input>
                            </div>
                            <div className="form-send">
                                <button 
                                    className="form-send-button"
                                    onClick = {handleClickSend}
                                >{cirilizatorDecirilizator(alphabet, `${signInisActive? 'Prijavi se' : 'Registruj se'}`)}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}