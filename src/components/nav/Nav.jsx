import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activateNav, setActiveNav] = useState("#");
  const handleHomeClick = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace
    setActiveNav("#");
    window.scrollTo(0, 0); 
    console.log('asdasdsa')// Esto mueve la vista al inicio de la página
  };

  return (
    <nav>
      <a
        href="# "
        onClick={handleHomeClick}
        className={activateNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activateNav === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activateNav === "contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activateNav === "experience" ? "active" : ""}>
        <BiBook />
      </a>
    </nav>
  );
};

export default Nav;
