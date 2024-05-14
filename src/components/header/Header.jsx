import React from "react";
import './header.css'
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials";
import Img from "../img/img"
import '../../App.css'


const Header = () => {
    return (
        <header className="crt">

        <div className=".container header__container">
                    <HeaderSocials/>

            <h5>Hello i am</h5>
            <h1>Pelle Gabriel</h1>
                                    <Img/>

            <h5 className="text-light">Front-end Developer</h5>

            <CTA/>

            <br/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        </header>
    ) 
}

export default Header