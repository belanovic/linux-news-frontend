import React from 'react';
import BootstrapCarousel from './BootstrapCarousel.js';
import Card from './Card.js';
import lorem from './text.js';

export default function Header() {
    return (
        <main className="main">
            <div className="container main-container">
                <BootstrapCarousel />
                <Card 
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3nVwbjf'
                />
                <Card 
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LN8xIC'
                />
                <Card 
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/35YgQbv'
                />
                <Card 
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
            </div>
        </main>
    )
}