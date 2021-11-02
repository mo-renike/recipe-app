import React from "react";

const Recipe = ({ title, img, source, nutrients, key }) => {
  return (
    <div className="recipe">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Recipe;
