import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from "react";

const Nav = () => {
    const [activateNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="# " onClick={() => setActiveNav('#')} className={activateNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('about')} className={activateNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#contact" onClick={() => setActiveNav('contact')} className={activateNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
            <a href="#experience" onClick={() => setActiveNav('experience')} className={activateNav === 'experience' ? 'active' : ''}><BiBook/></a>
        </nav>
    ) 
}

export default Nav