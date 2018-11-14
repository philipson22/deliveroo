import React from "react";
import "./App.css";
class Cover extends React.Component {
  render() {
    return (
      <img className="cover-style" src={this.props.label} alt="cover_image" />
    );
  }
}
export default Cover;
