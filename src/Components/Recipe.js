import React from 'react'

const Recipe = ({ title, time, source,  key }) => {
  return (
    <div className="recipe">
      <h3>{title}</h3>
      <p>Ready in {time}mins</p>
      <a href="{source}">Source</a>
    </div>
  );
};

export default Recipe
