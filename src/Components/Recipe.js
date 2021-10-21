import React from "react";

const Recipe = ({ title, img, source, nutrients }) => {
  return (
    <div className="recipe">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{nutrients}</p>
      <a href="{source}">Source</a>
    </div>
  );
};

export default Recipe;
