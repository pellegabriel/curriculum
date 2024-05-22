// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

class App extends Component {
  render() {
    return (
      <>
        <div id="AppContainer">
          <Router>
            <Footer />
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
