import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand">
          <ul>
            <li><a href="#">Google Books</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Saved</a></li>
          </ul>
      </a>
    </nav>
  );
}

export default Nav;
