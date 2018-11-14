import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

import "./App.css";

class RestaurantPage extends Component {
  state = {
    restaurantPath: "",
    restaurantDescription: "",
    restaurantPicture: ""
  };

  componentDidMount() {
    axios
      .get("https://deliveroo-api.now.sh/menu")
      .then(response => {
        this.setState({
          restaurantPath: response.data.restaurant.path,
          restaurantDescription: response.data.restaurant.description,
          restaurantPicture: response.data.restaurant.picture
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div id="container">
          <Header
            title={this.state.restaurantPath}
            description={this.state.restaurantDescription}
            picture={this.state.restaurantPicture}
          />
        </div>
      </div>
    );
  }
}

export default RestaurantPage;
