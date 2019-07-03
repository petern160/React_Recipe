import React from "react";
import Nutrition from "./Nutrition";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar({ search, getSearch, updateSearch }) {
  return (
    <div>
      <nav
        id="fixed-nav-top"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand nav-link disabled" href="#">
            Recipe Finder
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Find the best recipes here :
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Nutrition">
                Nutrtion Guide
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
