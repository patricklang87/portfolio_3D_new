import './Hero.css';
import React from 'react';

export default function Hero() {
    return (
        <div className="Hero">
            <div className="heroMessage">
                <h1>
                    Hi! I'm Patrick.
                </h1>
                <h2>
                I'm a full stack developer with <strong>2&frac12; years professional experience</strong>. I love new challenges and I am excited for the next step in my career.
                </h2>
                <a href="#contact">
                    <button style={{backgroundColor: 'hotpink'}}>
                        Get in touch!
                    </button> 
                </a>
            </div>
        </div>
    )
}
