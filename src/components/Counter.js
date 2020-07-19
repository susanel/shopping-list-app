import React from "react";

const Counter = (props) => {
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
};

export default Counter;
