import React, { Component } from "react";
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
      
      <div id='AppConteiner'>
        <Header/>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
