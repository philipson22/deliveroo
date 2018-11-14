import React from "react";

import Description from "./Description";
import Cover from "./Cover";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src="images/logo.png" alt="logo_deliveroo" />
        <hr />
        <div className="first-restaurant">
          <div style={{ marginRight: "50px" }}>
            <h1>{this.props.title} </h1>
            <Description label={this.props.description} />
          </div>
          <div>
            <Cover label={this.props.picture} />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
