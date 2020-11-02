import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Google Books Library</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Search for Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">View Saved Books</a>
        </li>
      </ul>

    </nav>
  )
};

export default Navigation;