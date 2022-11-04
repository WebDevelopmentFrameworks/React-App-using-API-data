import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
return (
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Logo</Link></li>
        <li className="nav-item"><Link to="/ingredients" className="nav-link">Search ingredients</Link></li>
        <li className="nav-item"><Link to="/recipe" className="nav-link">Search recipe</Link></li>
        <li className="nav-item"><Link to="/wine" className="nav-link">Search wine</Link></li>
      </ul>
    </header>
  </div>
);
}