import React, { useEffect, useState } from "react";
import "../recipe.css";
import NavBar from "../NavBar";
import RecipeINFO from "./RecipeINFO";

const Recipe = () => {
  const APP_ID = "b5b89116";
  const APP_KEY = "09827f14bf323a9f160ee0af66e8ed6f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    RecipesGET();
  }, []);

  const RecipesGET = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <body className="RecipeBody">
      <section>
        <NavBar />
        <div className="Recipe">
          <form className="form-search">
            <input className="input-search" type="text" value={search} />
            <button className="button-search" type="submit">
              Search
            </button>
          </form>
          {recipes.map((recipe) => (
            <RecipeINFO
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              url={recipe.recipe.url}
              totalWeight={recipe.recipe.totalWeight}
            />
          ))}
        </div>
      </section>
    </body>
  );
};

export default Recipe;
