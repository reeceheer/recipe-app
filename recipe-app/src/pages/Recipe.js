import React from "react";
import "../recipe.css";
import NavBar from "../NavBar";

const Recipe = () => {
  const APP_ID = "b5b89116";
  const APP_KEY = "09827f14bf323a9f160ee0af66e8ed6f";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <body className="RecipeBody">
      <section>
        <NavBar />
        <div className="Recipe">
          <form className="form-search">
            <input className="input-search" type="text" />
            <button className="button-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
    </body>
  );
};

export default Recipe;
