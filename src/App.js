import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
const axios = require("axios");
class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Router>
          <div>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/about">About</Link>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
