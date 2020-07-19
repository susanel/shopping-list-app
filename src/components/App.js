import React, { Component } from "react";
import AddProduct from "./AddProduct";
import ShoppingList from "./ShoppingList";
import CategoryList from "./CategoryList";
import GeneratePDF from "./GeneratePDF";

class App extends Component {
  state = {
    products: [
      {
        id: 0,
        name: "milk",
        category: "dairy",
        quantity: 3,
        unit: "pcs",
      },
      {
        id: 1,
        name: "carrots",
        category: "vegetables",
        quantity: 5,
        unit: "kg",
      },
      {
        id: 2,
        name: "pears",
        category: "fruits",
        quantity: 7,
        unit: "kg",
      },
      {
        id: 3,
        name: "bread",
        category: "baked goods",
        quantity: 1,
        unit: "pcs",
      },
      {
        id: 4,
        name: "napkins",
        category: "cleaners",
        quantity: 2,
        unit: "pcs",
      },
      {
        id: 5,
        name: "notebook",
        category: "others",
        quantity: 1,
        unit: "pcs",
      },
    ],
    filteredProducts: [],
    isFiltered: false,
    idNumber: 6,
    itemsNumber: 0,
    itemsWeight: 0,
  };

  addProduct = (name, category, quantity, unit) => {
    //Change type from string to number - (number input gets a string value)
    quantity = quantity * 1;

    //Update idNumber
    let idNumber = this.state.idNumber + 1;
    if (this.state.products.length === 0) {
      idNumber = 0;
    }

    const product = {
      id: idNumber,
      name,
      category,
      quantity,
      unit,
    };

    this.setState((prevState) => ({
      products: [...prevState.products, product],
      idNumber,
    }));

    return true;
  };

  deleteProduct = (id) => {
    let products = [...this.state.products];
    let filteredProducts = [...this.state.filteredProducts];

    //Delete all items
    if (id === "all") {
      products.length = 0;
      this.setState({
        products,
      });
      return;
    }

    //Delete selected item
    products = products.filter((product) => product.id !== id);
    filteredProducts = filteredProducts.filter((product) => product.id !== id);

    this.setState({
      products,
      filteredProducts,
    });
  };

  filterProducts = (category) => {
    if (category === "all") {
      this.setState({
        filteredProducts: [],
        isFiltered: false,
      });
    } else {
      let products = [...this.state.products];
      products = products.filter((product) => product.category === category);
      this.setState({
        filteredProducts: products,
        isFiltered: true,
      });
    }
  };

  countProducts = () => {
    let itemsNumber = 0;
    let itemsWeight = 0;
    this.state.products.forEach((product) => {
      if (product.unit === "pcs") {
        itemsNumber += product.quantity;
      } else if (product.unit === "kg") {
        itemsWeight += product.quantity;
      }
    });

    this.setState({
      itemsNumber,
      itemsWeight,
    });
  };

  manageLocalStorage = (command, nextState = null) => {
    if (command === "get") {
      // console.log("get data from LocalStorage");
      localStorage.getItem("products") &&
        this.setState({
          products: JSON.parse(localStorage.getItem("products")),
          itemsNumber: JSON.parse(localStorage.getItem("itemsNumber")),
          itemsWeight: JSON.parse(localStorage.getItem("itemsWeight")),
          idNumber: JSON.parse(localStorage.getItem("idNumber")),
        });
    } else if (command === "set") {
      // console.log("Send data to LocalStorage");
      localStorage.setItem("products", JSON.stringify(nextState.products));
      localStorage.setItem("idNumber", JSON.stringify(nextState.idNumber));
      localStorage.setItem(
        "itemsNumber",
        JSON.stringify(nextState.itemsNumber)
      );
      localStorage.setItem(
        "itemsWeight",
        JSON.stringify(nextState.itemsWeight)
      );
    }
  };

  componentWillMount() {
    const savedItems = JSON.parse(localStorage.getItem("products"));

    if (savedItems === null) {
      console.log("null");
      this.countProducts();
      return;
    }

    this.manageLocalStorage("get");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products.length !== this.state.products.length) {
      this.countProducts();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this.manageLocalStorage("set", nextState);
  }

  render() {
    return (
      <div className="app">
        <h1>Add product</h1>
        <AddProduct add={this.addProduct} />
        <h1>Categories</h1>
        <CategoryList filter={this.filterProducts} />
        <h1>Shopping List</h1>
        <ShoppingList
          products={this.state.products}
          filteredProducts={this.state.filteredProducts}
          delete={this.deleteProduct}
          isFiltered={this.state.isFiltered}
          itemsNumber={this.state.itemsNumber}
          itemsWeight={this.state.itemsWeight}
        />
        <GeneratePDF products={this.state.products} />
      </div>
    );
  }
}

export default App;
