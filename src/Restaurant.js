import React, { Component } from "react";
import axios from "axios";
import Cart from "./Cart.js";
import Header from "./Header";

class Restaurant extends Component {
  state = {
    restaurant: {},
    menu: {},
    cart: [
      // { id: "", quantity: 1, name: "Brunch vegan", price: "24,50 €" },
      // { id: "", quantity: 2, name: "Fromage blanc", price: "3,50 €" }
    ]
  };
  formatString = text => {
    if (text.length > 120) {
      return text.substring(0, 120) + "...";
    }

    return text;
  };

  render() {
    const entries = Object.entries(this.state.menu);

    const menuItems = [];
    for (let i = 0; i < entries.length; i++) {
      menuItems.push(<h2 key={i}>{entries[i][0]}</h2>);
      let childItems = [];
      //console.log(entries[i]);
      for (let j = 0; j < entries[i][1].length; j++) {
        childItems.push(
          <li
            key={j}
            style={{
              padding: "20px",
              border: "solid 1px #535353",
              backgroundColor: "white",
              width: "calc(50% - 20px)",
              boxSizing: "border-box",
              marginRight: "20px",
              display: "flex",
              marginBottom: "20px"
            }}
          >
            <div
              style={{
                flex: 1
              }}
              key={entries[i][1][j].id} // Good practice, utiliser l'id d'une donnée
              onClick={() => {
                // Pour mettre à jour le panier,
                // Nous devons créer une copie de l'ancien panier et modifier cette copie
                // avant de faire un setState

                // Pourquoi ?
                // Si on fait ça :
                // this.setState({
                //   cart: this.state.cart
                // })
                // Pour React, il n'y a pas de modification

                const oldCart = this.state.cart;

                // "Destructuring" c'est une fonctionnalité ES6
                // Fonctionne aussi avec les objets
                const newCart = [...oldCart]; // Créer une copie de oldCart

                // Avant d'ajouter un élément dans le tableau, on vérifie si il est déjà présent
                let productFound = false;
                for (let k = 0; k < newCart.length; k++) {
                  console.log(newCart[k].name);
                  if (newCart[k].id === entries[i][1][j].id) {
                    console.log(newCart[k].id);

                    productFound = true;
                    newCart[k].quantity++;
                  }
                }

                if (productFound === false) {
                  newCart.push({
                    id: entries[i][1][j].id,
                    quantity: 1,
                    name: entries[i][1][j].title,
                    price: Number(entries[i][1][j].price)
                  });
                }

                this.setState({
                  cart: newCart
                });

                // setState déclenche le nouveau render
              }}
            >
              <h3>{entries[i][1][j].title}</h3>
              <p> {this.formatString(entries[i][1][j].description)}</p>
              <p>{entries[i][1][j].price + "€"} </p>
              <p>{entries[i][1][j].popular}</p>
            </div>
            {entries[i][1][j].picture ? (
              <div>
                <img
                  alt="pop"
                  src={entries[i][1][j].picture}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginTop: "20px"
                  }}
                />
              </div>
            ) : null}
          </li>
        );
      }
      menuItems.push(
        <ul
          key={i + "abc"}
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {childItems}
        </ul>
      );
    }
    return (
      <div>
        <Header />
        <div className="container first-restaurant">
          <div style={{ flex: 1, paddingRight: "50px" }}>
            <h1>{this.state.restaurant.name}</h1>
            <p>{this.state.restaurant.description}</p>
          </div>
          <div style={{ width: "390px" }}>
            <img
              alt="poop"
              src={this.state.restaurant.picture}
              style={{
                objectFit: "cover",
                width: "390px",
                height: "170px",
                borderRadius: "10px"
              }}
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#f3f5f5", marginTop: "15px" }}>
          <div className="container" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>{menuItems}</div>
            <div
              style={{
                backgroundColor: "white",
                width: "390px",
                height: "200px",
                borderBox: "solid 1px",
                marginTop: "20px"
              }}
            >
              <Cart
                selectedProducts={this.state.cart}
                onIncrement={id => {
                  const newCart = [...this.state.cart];

                  for (let i = 0; i < newCart.length; i++) {
                    if (newCart[i].id === id) {
                      newCart[i].quantity++;
                    }
                  }
                  this.setState({
                    cart: newCart
                  });
                }}
                decrement={id => {
                  const newCart = [...this.state.cart];

                  for (let i = 0; i < newCart.length; i++) {
                    if (newCart[i].id === id) {
                      if (newCart[i].quantity > 1) {
                        newCart[i].quantity--;
                      } else {
                        newCart.splice(i, 1);
                      }
                    }
                  }

                  this.setState({
                    cart: newCart
                  });
                }}
              />
            </div>
          </div>
        </div>
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

export default Restaurant;
