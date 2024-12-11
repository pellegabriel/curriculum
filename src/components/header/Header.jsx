
import React from "react";
import "./header.css";
import Img from "../img/img";
import "../../App.css";

const Header = () => {
  return (
    <header className="crt">
      <div className="container header__container">
        <h1 className="header__title">Hello i am</h1>
        <h2 className="header__title">Pelle Gabriel</h2>
        <Img />
        <h3 className="text-light">Front-end Developer</h3>
        <br />
        <h3 className="header__subtitle">
          Turn the page and look at the companies I worked for.
        </h3>
      </div>
    </header>
  );
};

export default Header;