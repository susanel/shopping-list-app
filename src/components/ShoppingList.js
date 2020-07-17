import React from "react";
import Item from "./Item";

const ShoppingList = (props) => {
  const items = props.products.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  return (
    <div className="list">
      <div className="table-tile main">Product</div>
      <div className="table-tile main">Category</div>
      <div className="table-tile main">Quantity</div>
      <div className="table-tile main">Units</div>
      <div className="table-tile main">Delete</div>
      {items}
    </div>
  );
};

export default ShoppingList;
