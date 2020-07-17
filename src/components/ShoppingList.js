import React from "react";
import Item from "./Item";
// import Vegetable from "./Vegetable";
// import VegetableList from "../product lists/VegetableList";

const ShoppingList = (props) => {
  const items = props.products.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  const filteredItems = props.filteredProducts.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  return (
    <div className="list">
      <div className="table-tile main">Product</div>
      <div className="table-tile main">Category</div>
      <div className="table-tile main">Quantity</div>
      <div className="table-tile main">Units</div>
      <div className="table-tile main">Delete</div>
      {props.isFiltered ? filteredItems : items}
      <div className="count">
        <h4>Number of items: {props.itemsNumber} pcs</h4>
        <h4>Weight of items</h4>
      </div>
    </div>
  );
};

export default ShoppingList;
