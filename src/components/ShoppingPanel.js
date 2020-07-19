import React from "react";

//Look for a better idea to store HTML
const ShoppingPanel = (props) => {
  const counterMessageHTML = [
    <div className="no-items">
      <p>There is no items on your list</p>
    </div>,
    <div className="count">
      <h3>All your items together: </h3>
      {!props.itemsNumber * 1 === 0 && (
        <h4>Number of products: {props.itemsNumber} pcs</h4>
      )}
      {!props.itemsWeight * 1 === 0 && (
        <h4>Weight of products: {props.itemsWeight} kg</h4>
      )}
    </div>,
  ];

  if (props.itemsNumber === 0 && props.itemsWeight === 0) {
    return counterMessageHTML[0];
  } else {
    return counterMessageHTML[1];
  }
};

export default ShoppingPanel;
