import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
require("dotenv").config();

// console.log(typeof process.env.REACT_APP_APP_ID);
// console.log(`${process.env.REACT_APP_APP_KEY}` + " warawrawrawr/");
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;
const App = () => {
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []); // only runs once when page is rendered

  const getRecipes = async () => {
    // does not come instantly so you have to tell it to wait
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // when you have promise add await some data that does not come back instnatly
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
