import React from "react";
import Axios from "axios";
import "./App.css";
import Cart from "./Cart.js";
class Checkout extends React.Component {
  state = {
    address: "",
    appartement: "",
    etage: "",
    digicode: "",
    codePostal: "",
    ville: "",
    telephone: "",
    instructions: ""
  };

  render() {
    // console.log(
    //   "this.props.location*******",
    //   this.props.location.submittedCart
    // );
    // let renderCart = [];
    // if (this.props.location.submittedCart) {
    //   for (let i = 0; i < this.props.location.submittedCart.length; i++) {
    //     renderCart.push(
    //       <li style={{ margin: "5px" }} key={i}>
    //         <span>{this.props.location.submittedCart[i].quantity}</span>
    //         <span>x</span>
    //         <span>{this.props.location.submittedCart[i].name}</span>
    //         <span style={{ margin: "5px" }}>
    //           {(
    //             this.props.location.submittedCart[i].price *
    //             this.props.location.submittedCart[i].quantity
    //           ).toFixed(2) + " €"}
    //         </span>
    //       </li>
    //     );
    //   }
    // }

    return (
      <div className="checkout-model">
        <div style={{ marginLeft: "300px" }}>
          <h2>Nom du restaurant</h2>
          <h4>Adresse de livraison</h4>
          <h5>Etage et numero d'appartement</h5>
          <h5>Digicode</h5>
          <form
            onSubmit={event => {
              alert(this.state.address + " " + this.state.telephone);
              event.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="ex: Appartement n°15"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    appartement: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.appartement}
            />
            <input
              type="text"
              placeholder="ex: B123"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    digicode: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.digicode}
            />
            <h5>Adresse</h5>
            <input
              type="text"
              placeholder="ex: 20 rue de pipo"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    address: event.target.value
                  } /* ,
              () => console.log(this.state) */
                );
              }}
              value={this.state.address}
            />
            <p>Inclut le nom de votre rue et de votre numero d'appartement</p>
            <h5>Code postal</h5> <h5>Ville</h5>
            <input
              type="text"
              placeholder="ex: 75001"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    codePostal: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.codePostal}
            />
            <input
              type="text"
              placeholder="ex: Paris"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    ville: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.ville}
            />
            <h5>Numero de télélphone</h5>
            <input
              type="text"
              placeholder="06 89 09 76 67"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    telephone: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.telephone}
            />
            <h5>Instructions pour votre livreur</h5>
            <input
              type="text"
              placeholder="ex: Code 1ère porte: B123"
              onChange={event => {
                /* console.log(event.target.value); */
                this.setState(
                  {
                    instructions: event.target.value
                  } /* ,
            () => console.log(this.state) */
                );
              }}
              value={this.state.instructions}
            />
            <p>
              Votre commande arrivera dans <strong>15-25 minutes</strong>
            </p>
            <button type="submit">Confirmer et Payer</button>{" "}
          </form>{" "}
        </div>
        <div>
          {" "}
          <h5 style={{ textAlign: "center" }}>Panier</h5>
          <Cart
            selectedProducts={this.props.location.submittedCart}
            isCheckoutPage={true}
          />
        </div>
      </div>
    );
  }
}

export default Checkout;
