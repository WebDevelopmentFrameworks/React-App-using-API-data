import React from "react";
import pot from "../images/pot.png";
import { useState } from "react";

export default function RecipeByName() {
  const [image, setImage] = useState(pot);
  const [search, setSearch] = useState("");

  const [recipeTitle, setRecipeTitle] = useState(null);
  const [recipeDescription, setRecipeDescription] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [noInstructions, setNoInstructions] = useState(false);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeSource, setRecipeSource] = useState();

  const [toggleOptions, setToggleOptions] = useState([]);

  async function setRecipe(id) {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL +
          id +
          "/information?" +
          process.env.REACT_APP_API_KEY +
          "&includeNutrition=false"
      );
      if (response.ok) {
        const JSON = await response.json();
        setRecipeIngredients(JSON.extendedIngredients);
        setImage(JSON.image);
        setRecipeDescription(JSON.summary);
        setRecipeSource(JSON.sourceUrl);
        if (JSON.analyzedInstructions.length === 0) {
          setNoInstructions(true);
        } else {
          setNoInstructions(false);
          const allInstructions = [];
          JSON.analyzedInstructions.forEach(section => {
            section.steps.map((step) => allInstructions.push(step))
          });
          setRecipeInstructions(allInstructions);
        }
        setRecipeTitle(JSON.title);
      } else {
        alert("Error retrieving data");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  async function fillToggle(e) {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_AUTOCOMPLETE + search);
      if (response.ok) {
        const JSON = await response.json();
        setToggleOptions(JSON);
      } else {
        alert("Error retrieving data");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  function createDescription() {
    return { __html: recipeDescription };
  }

  return (
    <div className="contentFlex">
      <div className="recipeContainer">
        <div className="row g-3">
          <label className="h2">Search for recipe</label>
          <div className="col-9">
            <input
              value={search}
              type="search"
              className="form-control"
              id="inputRecipeName"
              placeholder="Type the name of the recipe you want to search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-auto dropdown">
            <button
              type="button"
              className="btn btn-success mb-3 dropdown-toggle"
              data-bs-toggle="dropdown"
              onClick={fillToggle}
            >
              Choose recipe
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              {search !== "" &&
                toggleOptions.map((dish) => (
                  <li key={dish.id}>
                    <button
                      className="dropdown-item"
                      type="button"
                      value={dish.id}
                      onClick={(e) => setRecipe(e.target.value)}
                    >
                      {dish.title}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div id="ScrollRecipe" className="row bg-light p-3">
          {recipeTitle !== null && (
            <div>
              <h2 id="title">{recipeTitle}</h2>
              <p dangerouslySetInnerHTML={createDescription()} />
              <h4>Ingredients</h4>
              <ul id="ingredients">
                {recipeIngredients.map((ingredient) => (
                  <li
                    key={
                      ingredient.name + recipeIngredients.indexOf(ingredient)
                    }
                  >
                    {ingredient.measures.metric.amount}&nbsp;
                    {ingredient.measures.metric.unitShort}
                    <p>{ingredient.name}</p>
                  </li>
                ))}
              </ul>
              <h4>Instructions</h4>
              <div>
                {noInstructions ? (
                  <p>There are no Instructions provided for this recipe by the API. Check recipe source or Instructions.</p>
                ) : (
                  <ol id="instructions">
                    {recipeInstructions.map((step) => (
                      <li key={step.step}>
                        {step.step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              <p>
                Source: <a href={recipeSource}>{recipeSource}</a>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="recipeContainer">
        <img
          src={image}
          className="img-fluid"
          alt="The dish you are looking for"
        />
      </div>
    </div>
  );
}
