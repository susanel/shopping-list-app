import React, { Component } from "react";
import "../styles/App.css";
import AddProduct from "./AddProduct";
import ShoppingList from "./ShoppingList";
import CategoryList from "./CategoryList";
import GeneratePDF from "./GeneratePDF";

class App extends Component {
  counter = 3;
  state = {
    products: [
      {
        id: 0,
        name: "mleko",
        category: "dairy",
        quantity: 3,
        unit: "szt.",
      },
      {
        id: 1,
        name: "marchew",
        category: "veggies",
        quantity: 5,
        unit: "szt.",
      },
      {
        id: 2,
        name: "chleb",
        category: "bread",
        quantity: 1,
        unit: "szt.",
      },
    ],
  };

  addProduct = (name, category, quantity, unit) => {
    // console.log("dodaj obiekt");
    const product = {
      id: this.counter,
      name,
      category,
      quantity,
      unit,
    };
    this.counter++;
    // console.log(product);

    this.setState((prevState) => ({
      products: [...prevState.products, product],
    }));

    return true;
  };

  deleteProduct = (id) => {
    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);
    this.setState({
      products,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Add product</h1>
        <AddProduct add={this.addProduct} />
        <h1>Shopping List</h1>
        <ShoppingList
          products={this.state.products}
          delete={this.deleteProduct}
        />
        <h1>Categories</h1>
        <CategoryList />
        <GeneratePDF products={this.state.products} />
      </div>
    );
  }
}

export default App;
