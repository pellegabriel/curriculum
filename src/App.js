import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";

class App extends Component {
  render() {
    return (
      <>
        <div id="AppContainer">
          <Router>
            <Routes>
              <Route path="/" element={<Header />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
