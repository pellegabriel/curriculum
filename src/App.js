import React, { Component } from "react";
import "./App.css";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";




class App extends Component {
  
  render() {
    
    return (
      <div>
        <Header/>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        <Nav />
      </div>
    );
  }
}

export default App;
