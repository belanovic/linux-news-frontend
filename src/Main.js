import React from 'react';
import BootstrapCarousel from './BootstrapCarousel.js';
import Card from './Card.js';
import PartTitle from './PartTitle.js';
import lorem from './text.js';

export default function Header() {
    return (
        <main className="main">
            <div className="container main-container">
                <BootstrapCarousel />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3nVwbjf'
                />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LN8xIC'
                />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/35YgQbv'
                />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                <PartTitle title = "Magazin" />
                <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                 <Card 
                    classSuffix = 'magazin'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2LE1wdd'
                />
                <PartTitle title = "Sport" />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/2Y1Vyp1'
                />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3qH7Dfn'
                />
                <Card 
                    classSuffix = 'general'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/39XvfFN'
                />
                <Card 
                    classSuffix = 'sport'
                    title = "Naslov prve kartice"
                    paragraph = {lorem(0, 150)}
                    // date = {new Date().toLocaleDateString('rs-RS', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                    src = 'https://bit.ly/3sI8COt'
                />
            </div>
        </main>
    )
}