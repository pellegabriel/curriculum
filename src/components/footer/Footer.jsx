// src/components/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import BackgroundMusic from '../BackgroundMusic'
const Footer = () => {
  return (
    <section className="footer">
      <ul className="permalinks">
      
        <li>
              <BackgroundMusic />

        </li>

        <li>
          <Link to="/" className="nes-btn is-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nes-btn is-secondary">
            About
          </Link>
        </li>
        <li>
          <Link to="/experience" className="nes-btn is-secondary">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nes-btn is-secondary">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nes-btn is-secondary">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
