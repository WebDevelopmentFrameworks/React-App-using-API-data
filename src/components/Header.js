import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="d-flex justify-content-start py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4 ps-5">Recipe Search</span>
        </Link>
        <ul className="nav justify-content-center ms-5">
          <li className="nav-item">
            <Link to="/recipe" className="nav-link">
              Search recipe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
