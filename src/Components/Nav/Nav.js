import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/CV">CV</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
