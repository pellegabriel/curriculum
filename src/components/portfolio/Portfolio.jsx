import React from "react";
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://criptapi.netlify.app/" width="900" height="700" allow="fullscreen" title="Cripto-Api"></iframe>
                    </div>
                    <h3>Cripto-Api</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://criptapi.netlify.app" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>          
                        <a href="https://github.com/pellegabriel/cripto-api" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://tasksli.netlify.app/" width="900" height="700" allow="fullscreen" title="TasksList"></iframe>
                    </div>
                    <h3>TasksList</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://tasksli.netlify.app/" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>          
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://enciclopoke.netlify.app/" width="900" height="700" allow="fullscreen" title="PokeDex"></iframe>
                    </div>
                    <h3>PokeDex</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://enciclopoke.netlify.app" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>          
                        <a href="https://github.com/pellegabriel/pokedex" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://mapappoint.netlify.app" width="900" height="700" allow="fullscreen" title="Mapa"></iframe>
                    </div>
                    <h3>Map YPF Points</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://mapappoint.netlify.app" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>          
                        <a href="https://github.com/pellegabriel/mapa" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://buskdor.netlify.app/" width="900" height="700" allow="fullscreen" title="Movie Search"></iframe>
                    </div>
                    <h3>Movie Search</h3>
                    <div className="portfolio__item-cta"> 
                        <a href="https://buskdor.netlify.app" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>    
                        <a href="https://github.com/pellegabriel/sp-ike/tree/main/src" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <iframe src="https://rymorty.netlify.app/" width="900" height="700" allow="fullscreen" title="Rick and Morty's"></iframe>
                    </div>
                    <h3>Rick and Morty's</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://rymorty.netlify.app" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">Page</a>      
                        <a href="https://github.com/pellegabriel/my-app2" className="nes-btn is-primary" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </article>

            </div>
        </section>
    ) 
}

export default Portfolio