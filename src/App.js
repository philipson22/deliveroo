import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantPage from "./RestaurantPage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={RestaurantPage} />
        </Router>
      </div>
    );
  }
}
export default App;
