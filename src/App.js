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
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
        },
      }
    );
    const data = await response.json();
    setRecipes(data.meals);
    console.log(data.meals);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
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
            key={recipe.id}
            title={recipe.title}
            time={recipe.readyInMinutes}
            source={recipe.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
