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
        category: "vegetables",
        quantity: 5,
        unit: "szt.",
      },
      {
        id: 2,
        name: "gruszki",
        category: "fruits",
        quantity: 7,
        unit: "szt.",
      },
      {
        id: 3,
        name: "chleb",
        category: "baked goods",
        quantity: 1,
        unit: "szt.",
      },
      {
        id: 4,
        name: "chusteczki higieniczne",
        category: "cleaners",
        quantity: 2,
        unit: "szt.",
      },
      {
        id: 5,
        name: "zeszyt",
        category: "others",
        quantity: 1,
        unit: "szt.",
      },
    ],
    filteredProducts: [],
    isFiltered: false,
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
    console.log("klik");

    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);
    let filteredProducts = [...this.state.filteredProducts];
    filteredProducts = filteredProducts.filter((product) => product.id !== id);

    this.setState({
      products,
      filteredProducts,
    });
  };

  filterProducts = (category) => {
    console.log(category);
    let products = [...this.state.products];
    products = products.filter((product) => product.category === category);
    this.setState({
      filteredProducts: products,
      isFiltered: true,
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
          filteredProducts={this.state.filteredProducts}
          delete={this.deleteProduct}
          isFiltered={this.state.isFiltered}
        />
        <h1>Categories</h1>
        <CategoryList filter={this.filterProducts} />
        <GeneratePDF products={this.state.products} />
      </div>
    );
  }
}

export default App;
