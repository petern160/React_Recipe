import React from "react";
import style from "../recipe.module.css";
import uuid from "uuid";
import NumericLabel from "react-pretty-numbers";

const Recipe = ({ title, calories, image, ingredients }) => {
  let roundedCalories = Math.floor(calories);
  return (
    <div className="card" style={{ width: "45rem" }}>
      <h1>{title}</h1>
      <p style={{ fontWeight: "800" }}>Calories: {roundedCalories}</p>
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
          <li key={uuid.v4()}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
