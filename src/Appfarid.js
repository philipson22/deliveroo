import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    restaurant: {},
    menu: {}
  };

  render() {
    const entries = Object.entries(this.state.menu);
    const menuItems = [];
    for (let i = 0; i < entries.length; i++) {
      menuItems.push(<h2>{entries[i][0]}</h2>); // Va ajouter "Brunchs", "Petit déjeuner", etc.
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItems.push(<div>{entries[i][1][j].title}</div>);
      }
    }
    return (
      <div>
        <h1>{this.state.restaurant.name}</h1>
        {menuItems}
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
    });
  }
}

export default App;
