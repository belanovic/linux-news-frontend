import react, {useContext} from 'react';
import './styleIcuc.css';
import {context} from './newsContext';
import cirilizatorDecirilizator from './cirilizatorDecirilizator.js';

export default function Icuc() {
    const {alphabet} = useContext(context)
    return (
        <div className="icuc">
            <div className="icucText">{cirilizatorDecirilizator(alphabet, 'Iz časa u čas')}</div>
            <div className="pulseContainer">
                <div className="pulseCircle" style={{
                    animationDelay: "-3s",
                    animationDuration: '3s'
                }}></div>

                <div className="pulseCircle" style={{
                    animationDelay: "-2s",
                    animationDuration: '3s'
                }}></div>
                <div className="pulseCircle" style={{
                    animationDelay: "-1s",
                    animationDuration: '3s'
                }}></div>
                <div className="pulseCircle" style={{
                    animationDelay: "0s",
                    animationDuration: '3s'
                }}></div>
            </div>
        </div>
    )
}