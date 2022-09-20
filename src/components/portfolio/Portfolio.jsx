import React from "react";
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Portfolio</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <h3>Map YPF Points</h3>
                    <div className="portfolio__item-cta">      
                        <a href="https://github.com/pellegabriel/mapa" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <h3>Movie Search</h3>
                    <div className="portfolio__item-cta">      
                        <a href="https://github.com/pellegabriel/sp-ike/tree/main/src" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <h3>Rick and Morty's Gifs</h3>
                    <div className="portfolio__item-cta">      
                        <a href="https://github.com/pellegabriel/my-app2" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>
            </div>
        </section>
    ) 
}

export default Portfolio