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
    const response = await fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af"
	}
})
    const data = await response.json();
    setRecipes(data.meals);
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
        placeholder="Enter Recipe"
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
        {recipes.map((recipe) =>
          <Recipe
            key={recipe.idMeal}
            title={recipe.strMeal}
            img={recipe.strMealThumb}
          />
        )}
      </div>
    </div>
  );
};

export default App;

//get api from edeman.com
 