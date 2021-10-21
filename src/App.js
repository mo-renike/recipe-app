import React, { useEffect, useState } from "react";
import Recipe from "./Components/Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("beef");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
          "x-rapidapi-key":
            "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
        },
      }
    );
    const data = await response.json();
    console.log(data.hints);
    setRecipes(data.hints);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="container">
      <h1>Recipe App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="search"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.foodId}
            title={recipe.label}
            img={recipe.image}
            source={recipe.uri}
            nutrients={recipe.nutrients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

//get api from edeman.com
