import React from "react";
import Header from './../../components/Header/Header'
import './Home.css';
import Hero from './../../components/Hero/Hero.jsx'
import { FEATURES_ITEM } from './../../Data/Features.js'
import Features from './../../components/Features/Features.jsx'

export default function Home() {
    return (
        <div>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {FEATURES_ITEM.map(element => (
                    <Features key={element.id} img={element.img} imgAlt={element.imgAlt} title={element.title} text={element.text} />
                ))}
            </section>
        </div>
    );
}