import React from "react";
import Item from "./Item";
import ShoppingPanel from "./ShoppingPanel";

const ShoppingList = (props) => {
  const items = props.products.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

  const filteredItems = props.filteredProducts.map((product) => (
    <Item key={product.id} product={product} delete={props.delete} />
  ));

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
      {!props.isFiltered && (
        <ShoppingPanel
          itemsNumber={props.itemsNumber}
          itemsWeight={props.itemsWeight}
          delete={props.delete}
        />
      )}
    </div>
  );
};

export default ShoppingList;
