import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tilesArray = [
  { icon: "carrot", category: "vegetables" },
  { icon: "apple-alt", category: "fruits" },
  { icon: "cheese", category: "dairy" },
  { icon: "bread-slice", category: "baked goods" },
  { icon: "soap", category: "cleaners" },
  { icon: "shopping-basket", category: "others" },
];

const CategoryList = (props) => {
  const tiles = tilesArray.map((tile, i) => (
    <div className="tile" onClick={() => props.filter(tile.category)} key={i}>
      <FontAwesomeIcon icon={tile.icon} size="4x" style={{ color: "black" }} />
      <h2>{tile.category}</h2>
    </div>
  ));

  return (
    <div className="categories">
      {tiles}
      <div className="tile" onClick={() => props.filter("all")}>
        <h2>Show all</h2>
      </div>
    </div>
  );
};

export default CategoryList;
