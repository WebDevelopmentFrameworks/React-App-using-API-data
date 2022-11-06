import React from "react";
import about from "../images/about.jpg";

export default function About() {
  return (
    <div className="contentFlexAbout">
      <div className="aboutContainer">
        <img src={about} alt="me" className="img-thumbnail" />
      </div>
      <div className="aboutContainer">
        <div>
          <h2>About this web application</h2>
          <p className="ps-2">
            This is a simple react app, that retrieves data from an API service.
            First it autocompletes the search and suggests similar recipes. Once
            a recipe is selected, the recipe data is fetched and displayed in
            various ways:&nbsp;
            <b>
              Recipe name, description, ingredients, instructions and image.&nbsp;
            </b>
            The source API requires an API-Key which is provided as an env
            variable.
            <br />
            A mixture of Bootstrap and plain CSS were used for styling purposes.
          </p>
          <p className="ps-2">All data is being retrieved from: <a href="https://spoonacular.com/food-api">https://spoonacular.com/food-api</a></p>
        </div>
        <div>
          <h3>About me</h3>
          <p className="ps-2">Hi!<br/>My name is Kacper Kolodziej and I am a Software Engineering student at OAMK.</p>
          <p className="ps-2">
            Here is my <a href="https://github.com/WellyBelly">gitHub</a> page!
          </p>
        </div>
      </div>
    </div>
  );
}
