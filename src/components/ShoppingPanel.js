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
    return (
      <div className="count-wrap">
        {counterMessageHTML[0]}
        <div className="delete">
          <button
            onClick={() => {
              props.delete("all");
            }}
          >
            Delete all
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="count-wrap">
        {counterMessageHTML[1]}
        <div className="delete">
          <button
            onClick={() => {
              props.delete("all");
            }}
          >
            Delete all
          </button>
        </div>
      </div>
    );
  }
};

export default ShoppingPanel;
