import React from "react";
import Product from "./Product";

const List = (props) => {
  const items = props.products.map((product) => (
    <Product key={product.id} product={product} delete={props.delete} />
  ));

  const filteredItems = props.filteredProducts.map((product) => (
    <Product key={product.id} product={product} delete={props.delete} />
  ));

  return <div className="list">{props.isFiltered ? filteredItems : items}</div>;
};

export default List;
