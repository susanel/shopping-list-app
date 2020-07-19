import React from "react";
import ShoppingListPanel from "../components/ShoppingListPanel";
import List from "../components/List";

const tableHeader = ["Product", "Category", "Quantity", "Units", "Delete"];

const ShoppingList = (props) => {
  const tiles = tableHeader.map((header) => (
    <div key={header} className="table-tile">
      {header}
    </div>
  ));

  return (
    <div className="shopping-list">
      <div className="list-main">{tiles}</div>
      <List
        products={props.products}
        filteredProducts={props.filteredProducts}
        delete={props.delete}
        isFiltered={props.isFiltered}
      />
      {!props.isFiltered && (
        <ShoppingListPanel
          itemsNumber={props.itemsNumber}
          itemsWeight={props.itemsWeight}
          delete={props.delete}
        />
      )}
    </div>
  );
};

export default ShoppingList;
