import React, { Component } from "react";
import "./styles.css";

const products = [
  {
    name: "Ipad",
    price: "200$"
  },
  {
    name: "Iphone",
    price: "650$"
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    this.setState({
      products
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {this.state.products.map(product => (
          <div>
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
