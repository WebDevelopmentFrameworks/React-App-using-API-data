import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="contentFlexHome">
      <h1>Recipe Search</h1>
      <div>
        <p className="homePage">You want to cook a meal?</p>
        <p className="homePage">
          You cannot remember the name of the recipe you are looking for?
        </p>
        <p className="homePage">
          You are tired of cooking the exat same dishes and want to add some
          variation to your go-to recipes?
        </p>
      </div>
      <Link className="btn btn-success btn-lg" to="/recipe">
        Give it a try
      </Link>
    </div>
  );
}
