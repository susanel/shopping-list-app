import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddProduct extends Component {
  state = {
    product: "",
    category: "vegetables",
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
    const number = this.state.number;

    if (this.state.product.length > 2 && number > 0 && number < 100) {
      correct = true;
    } else {
      if (this.state.product.length <= 2) {
        alert("The product name is too short");
      } else if (number <= 0) {
        alert("Products quantity must be greater than 0");
      } else if (number >= 100) {
        alert("Products quantity cannot be greater than 99");
      }
      correct = false;
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
          category: "vegetables",
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
        <form onSubmit={this.handleSubmit} className="clearfix">
          <input
            name="product"
            type="text"
            placeholder="Product name..."
            value={this.state.product}
            onChange={this.handleChange}
          />
          <input
            className="quantity"
            name="number"
            type="number"
            placeholder="How many...?"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <label className="container">
            pcs
            <input
              type="radio"
              name="unit"
              value="pcs"
              checked={this.state.checkedPcs}
              onChange={this.handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            kg
            <input
              type="radio"
              name="unit"
              value="kg"
              checked={this.state.checkedKg}
              onChange={this.handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="vegetables" defaultChecked>
              vegetables
            </option>
            <option value="fruits">fruits</option>
            <option value="dairy">dairy</option>
            <option value="baked goods">baked goods</option>
            <option value="cleaners">cleaners</option>
            <option value="others">others</option>
          </select>
          <button>
            <FontAwesomeIcon icon="cart-plus" style={{ fontSize: 36 }} />
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
