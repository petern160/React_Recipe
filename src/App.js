import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Recipe from "./components/Recipe";
import "./App.css";
import Navbar from "./components/Navbar";
import uuid from "uuid";
import { Link, Route, BrowserRouter } from "react-router-dom";
require("dotenv").config();

// console.log(typeof process.env.REACT_APP_APP_ID);
// console.log(`${process.env.REACT_APP_APP_KEY}` + " warawrawrawr/");
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;
const App = () => {
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("shrimp");

  useEffect(() => {
    getRecipes();
  }, [query]); // only runs once when page is rendered

  const getRecipes = async () => {
    // does not come instantly so you have to tell it to wait
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // when you have promise add await some data that does not come back instnatly
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    // e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Navbar />

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <br />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={uuid.v4()}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
