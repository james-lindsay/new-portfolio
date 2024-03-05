import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">Projects</a>
        </li>
        <Link to="cv">
          <li className="navbar-item">
            <a href="#contact">CV</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
