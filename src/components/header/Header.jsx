import React from "react";
import "./header.css";
import Img from "../img/img";
import "../../App.css";

const Header = () => {
  return (
    <header className="crt">
      <div className=".container header__container">
        <h1 style={{
          fontSize: '2rem'
        }}>Hello i am</h1>
        <h1>Pelle Gabriel</h1>
        <Img />
        <h3 className="text-light">Front-end Developer</h3>
        <br />
        <h3 style={{
          fontSize: '2rem'
        }}>Turn the page and look at the companies I worked for.</h3>

      </div>
    </header>
  );
};

export default Header;
