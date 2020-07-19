import React from "react";
import Counter from "./Counter";

//Look for a better idea to store HTML
const ShoppingListPanel = (props) => {
  const showMessageNoItems = (
    <div className="no-items">
      <p>There is no items on your list</p>
    </div>
  );

  const condition = props.itemsNumber === 0 && props.itemsWeight === 0;

  return (
    <div className="count-wrap">
      {condition ? (
        showMessageNoItems
      ) : (
        <Counter
          itemsNumber={props.itemsNumber}
          itemsWeight={props.itemsWeight}
        />
      )}
      <div className="delete">
        <button
          onClick={() => {
            props.delete("all");
          }}
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default ShoppingListPanel;
