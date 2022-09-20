import React from "react";
import './header.css'
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
        <div className=".container header__container">
            <h5>Hello i am</h5>
            <h1>Pelle Gabriel</h1>
            <h5 className="text-light">Front-end Developer</h5>

            <CTA/>
                <img className="me" src="./assets/perfil.png" alt=""/>
            <HeaderSocials/>
            <br/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        </header>
    ) 
}

export default Header