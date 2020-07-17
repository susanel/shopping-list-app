import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryList = (props) => {
  const icons = [
    "carrot",
    "apple-alt",
    "cheese",
    "bread-slice",
    "soap",
    "shopping-basket",
  ];

  const categories = [
    "vegetables",
    "fruits",
    "dairy",
    "baked goods",
    "cleaners",
    "others",
  ];

  const tiles = categories.map((category, i) => (
    <div className="tile" onClick={() => props.filter(category)}>
      <FontAwesomeIcon icon={icons[i]} size="4x" style={{ color: "black" }} />
      <h2>{category}</h2>
    </div>
  ));
  return <div className="categories">{tiles}</div>;
};

export default CategoryList;
