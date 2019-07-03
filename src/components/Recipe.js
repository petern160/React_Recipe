import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card" id={style.recipes}>
      <h1>{title}</h1>
      <p style={{ fontWeight: "800" }}>Calories: {calories}</p>
      <img
        className="card-img-top"
        style={{
          width: "25rem",
          height: "20rem"
        }}
        src={image}
        alt=""
      />
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
