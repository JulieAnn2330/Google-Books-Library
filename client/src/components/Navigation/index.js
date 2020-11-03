import React from "react";
import './index.css'

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Google Books Library</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item" className="navbar">
          <a className="nav-link" href="/" className="navText">Search for Books</a>
        </li>
        <li className="nav-item" className="navbar">
          <a className="nav-link" href="/saved" className="navText">View Saved Books</a>
        </li>
      </ul>

    </nav>
  )
};

export default Navigation;