import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <ul className="permalinks">
        <li>
          <a href="# " className="nes-btn is-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nes-btn is-secondary">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="nes-btn is-secondary">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nes-btn is-secondary">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nes-btn is-secondary">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
