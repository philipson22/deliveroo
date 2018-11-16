import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  static defaultProps = {
    selectedProducts: []
  };

  // fonction pour afficher panier vide quand 0 products
  renderProduct = products => {
    if (products.length) {
      return <ul>{products}</ul>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Votre panier est vide</p>
      </div>
    );
  };

  sousTotalPrice = () => {
    const tab = this.props.selectedProducts;
    let sousTotal = 0;
    for (let i = 0; i < tab.length; i++) {
      sousTotal = sousTotal + tab[i].quantity * tab[i].price;
    }

    return sousTotal.toFixed(2);
  };

  totalPrice = () => {
    const array = this.props.selectedProducts;

    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total = total + array[i].quantity * array[i].price;
    }
    return (total + 2.5).toFixed(2);
  };
  render() {
    const products = [];

    if (this.props.selectedProducts) {
      for (let i = 0; i < this.props.selectedProducts.length; i++) {
        products.push(
          <li style={{ margin: "5px" }} key={this.props.selectedProducts[i].id}>
            {/* Ternaire: si this.props.isCheckoutPage est vrai, je renvoie null, sinon je renvoie un bouton */}
            {this.props.isCheckoutPage ? null : (
              <button
                style={{
                  margin: "5px",
                  borderRadius: "15px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "lightseagreen"
                }}
                onClick={() => {
                  this.props.decrement(this.props.selectedProducts[i].id);
                }}
              >
                -
              </button>
            )}
            <span style={{ margin: "5px" }}>
              {this.props.selectedProducts[i].quantity}
            </span>
            {/* Ternaire */}
            {this.props.isCheckoutPage ? null : (
              <button
                style={{
                  margin: "5px",
                  borderRadius: "15px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "lightseagreen"
                }}
                // Quand un évènement click doit transmettre une variable, vous devez encapsuler l'appel à la fonction dans une nouvelle fonction
                onClick={() => {
                  this.props.onIncrement(this.props.selectedProducts[i].id);
                }}
              >
                +
              </button>
            )}

            <span style={{ margin: "5px" }}>
              {this.props.selectedProducts[i].name}
            </span>
            <span style={{ margin: "5px" }}>
              {(
                this.props.selectedProducts[i].price *
                this.props.selectedProducts[i].quantity
              ).toFixed(2) + " €"}
            </span>
          </li>
        );
      }
    }

    console.log("selectedProducts", this.props.selectedProducts);

    return (
      <div style={{ minHeight: "240px", backgroundColor: "white" }}>
        <div className="cart-model">
          <Link
            to={{
              pathname: "/Checkout",
              submittedCart: this.props.selectedProducts,
              totalPrice: this.totalPrice()
            }}
          >
            {" "}
            {this.props.isCheckoutPage ? null : (
              <button>Valider mon panier</button>
            )}
          </Link>
        </div>
        <div>{this.renderProduct(products)}</div>
        <div style={{ textAlign: "left" }}>
          <hr />
          <p>Sous-total : {this.sousTotalPrice() + " €"}</p>
          <p>Frais de Livraison : 2,50 €</p>
          <hr />
          <p>
            <strong>Total : {this.totalPrice() + " €"}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Cart;
