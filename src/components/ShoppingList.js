import React from "react";
import Item from "./Item";

const ShoppingList = (props) => {
  const items = props.products.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  const filteredItems = props.filteredProducts.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  const itemsCounter = () => {
    if (props.itemsNumber === 0 && props.itemsWeight === 0) {
      return (
        <div className="no-items">
          <p>There is no items on your list</p>
        </div>
      );
    } else {
      return (
        <div className="count">
          <h3>All your items together: </h3>
          {!props.itemsNumber * 1 === 0 && (
            <h4>Number of products: {props.itemsNumber} pcs</h4>
          )}
          {!props.itemsWeight * 1 === 0 && (
            <h4>Weight of products: {props.itemsWeight} kg</h4>
          )}
        </div>
      );
    }
  };

  return (
    <div className="list">
      <div className="list-main">
        <div className="table-tile">Product</div>
        <div className="table-tile">Category</div>
        <div className="table-tile">Quantity</div>
        <div className="table-tile">Units</div>
        <div className="table-tile">Delete</div>
      </div>

      {props.isFiltered ? filteredItems : items}
      {!props.isFiltered && itemsCounter()}
    </div>
  );
};

export default ShoppingList;
