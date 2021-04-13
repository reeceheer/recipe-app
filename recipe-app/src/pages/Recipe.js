import React, { useEffect, useState } from "react";
import "../recipe.css";
import NavBar from "../NavBar";
import RecipeINFO from "./RecipeINFO";

const Recipe = () => {
  const APP_ID = "b5b89116";
  const APP_KEY = "09827f14bf323a9f160ee0af66e8ed6f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("random");

  useEffect(async () => {
    RecipesGET();
  }, [query]);

  // function to get recipies from api

  const RecipesGET = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // Allows search to make

  const SearchUPDATE = (e) => {
    setSearch(e.target.value);
  };

  // When submit buttion is hit, seraches for recipe
  const SearchGET = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <body className="RecipeBody">
      <NavBar />
      <div className="Recipe">
        <form onSubmit={SearchGET} className="form-search">
          <input
            className="input-search"
            type="text"
            value={search}
            onChange={SearchUPDATE}
          />
          <button className="button-search" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeINFO
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </body>
  );
};

export default Recipe;
