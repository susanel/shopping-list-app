import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddProduct extends Component {
  state = {
    product: "",
    category: "veggies",
    number: "",
    unit: "pcs",
    checkedPcs: true,
    checkedKg: false,
  };

  //Znale© jakiß lepszy i krótszy sposob
  //wlasciwosci checked pozwalaja kontrolowac input
  handleChange = (e) => {
    if (e.target.type === "radio") {
      if (e.target.value === "pcs") {
        this.setState({
          checkedPcs: e.target.checked,
          checkedKg: false,
          [e.target.name]: e.target.value,
        });
      } else if (e.target.value === "kg") {
        this.setState({
          checkedPcs: false,
          checkedKg: e.target.checked,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  formValidation = () => {
    let correct = false;
    if (this.state.product.length > 2 && this.state.number > 0) {
      console.log("podano produkt");
      correct = true;
    } else if (this.state.product.length <= 2) {
      alert("Nie podano nazwy produktu");
      correct = false;
    } else if (this.state.number <= 0) {
      correct = false;
      alert("Liczba produktów musi byc wieksza od 0");
    }
    return correct;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { product, category, number, unit } = this.state;

    const validation = this.formValidation();

    if (validation) {
      const add = this.props.add(product, category, number, unit);

      //Czysci state
      if (add) {
        this.setState({
          product: "",
          category: "veggies",
          number: "",
          unit: "pcs",
          checkedPcs: true,
          checkedKg: false,
        });
      }
    }
  };

  render() {
    return (
      <div className="add-product">
        <form onSubmit={this.handleSubmit}>
          <input
            name="product"
            type="text"
            placeholder="Wpisz nazwe produktu..."
            value={this.state.product}
            onChange={this.handleChange}
          />
          <input
            name="number"
            type="number"
            placeholder="ilosc"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <label>
            szt.
            <input
              type="radio"
              name="unit"
              value="pcs"
              checked={this.state.checkedPcs}
              onChange={this.handleChange}
            />
          </label>
          <label>
            kg
            <input
              type="radio"
              name="unit"
              value="kg"
              checked={this.state.checkedKg}
              onChange={this.handleChange}
            />
          </label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="veggies" defaultChecked>
              warzywa
            </option>
            <option value="fruits">owoce</option>
            <option value="dairy">nabial</option>
            <option value="bread">pieczywo</option>
            <option value="cleaners">artykuly higieniczne</option>
            <option value="others">inne</option>
          </select>
          <button>
            <FontAwesomeIcon icon="cart-plus" style={{ fontSize: 30 }} />
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
