import React, { Component } from "react";
import "./App.css";
import Restaurant from "./Restaurant";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
