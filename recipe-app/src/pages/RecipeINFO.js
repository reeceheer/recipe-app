import react from "react";
import Recipe from "./Recipe";
import style from "../recipe.module.css";

const RecipeINFO = ({ title, image, url, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="titleINFO">{title}</h1>
      <img className="imageINFO" src={image} alt=""></img>
      <ol>
        {ingredients.map((ingredient) => (
          <li className="ingredient">{ingredient.text}</li>
        ))}
      </ol>
      <a className="URL" href={url}>
        CLICK HERE FOR FULL RECIPE
      </a>
    </div>
  );
};

export default RecipeINFO;
