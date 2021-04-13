import react from "react";
import Recipe from "./Recipe";

const RecipeINFO = ({ title, image, calories, url }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt=""></img>
      <p>{calories}</p>
      <p src={url}>{url}</p>
    </div>
  );
};

export default RecipeINFO;