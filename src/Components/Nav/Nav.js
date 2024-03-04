import React from "react";
import "./Nav.scss";
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
        <li className="navbar-item">
          <a href="#contact">CV</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
