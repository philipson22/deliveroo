import React from "react";

import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div style={{ borderBottom: "solid 1px #535353" }}>
        <div className="container" style={{ backgroundColor: "white" }}>
          <img className="logo" src="images/logo.png" alt="logo_deliveroo" />
        </div>
      </div>
    );
  }
}
export default Header;
