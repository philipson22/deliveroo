import React from "react";
import Title from "./Title";
import Description from "./Description";
import Cover from "./Cover";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src="images/logo.png" />
        <hr />
        <div className="first-restaurant">
          <div style={{ marginRight: "50px" }}>
            <Title label="Le pain quotidien" />
            <Description label="Deliveroo est une entreprise britannique de livraison de plats cuisinés fondée par Will Shu et Greg Orlowski. Elle opère dans plusieurs pays : Royaume-Uni, Pays-Bas, France, Allemagne, Belgique, Irlande, Espagne, Italie, Émirats arabes unis, Australie, Singapour, Hong Kong et Taïwan. Wikipédia" />
          </div>
          <div>
            <Cover />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
