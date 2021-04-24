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
    const handleClickTab = () => {
        setSignInIsActive(prev => !prev);
        setSignUpIsActive(prev => !prev);
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
                                    onClick = {handleClickTab}
                                >{cirilizatorDecirilizator(alphabet, 'Prijava')}</span>
                                <span 
                                    className= {`sign-up ${signUpisActive? 'isActive' : 'notActive'}`}
                                    onClick = {handleClickTab}
                                >{cirilizatorDecirilizator(alphabet, 'Registracija')}</span>
                            </div>

                            <div className="form-element username">
                                <label htmlFor="username" className="username-label">{cirilizatorDecirilizator(alphabet, 'Korisničko ime')}</label>
                                <input id="username" className="username-input" type="text"></input>
                            </div>

                            <div className="form-element pasword">
                                <label htmlFor="password" className="pasword-label">{cirilizatorDecirilizator(alphabet, 'Šifra')}</label>
                                <input id="username" className="pasword-input" type="text" ></input>
                            </div>

                            <div className="form-element email">
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