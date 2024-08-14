import './Hero.css';
import React from 'react'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="heroMessage">
                <h1>
                    Hi! I'm Patrick.
                </h1>
                <h2>
                    I'm a full stack developer with 2&frac12; years professional experience, excited for the next step in my career.
                </h2>
                <a href="#contact">
                    <button>
                        Get in touch!
                    </button> 
                </a>
            </div>
        </div>
    )
}
