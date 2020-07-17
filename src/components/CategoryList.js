import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryList = () => {
  const icons = [
    "carrot",
    "apple-alt",
    "cheese",
    "bread-slice",
    "soap",
    "shopping-basket",
  ];

  const category = [
    "Vegetables",
    "Fruits",
    "Dairy",
    "Baked goods",
    "Cleaners",
    "Others",
  ];

  const tiles = icons.map((icon, i) => (
    <div className="tile">
      <FontAwesomeIcon icon={icon} size="4x" style={{ color: "black" }} />
      <h2>{category[i]}</h2>
    </div>
  ));
  return <div className="categories">{tiles}</div>;
};

export default CategoryList;
