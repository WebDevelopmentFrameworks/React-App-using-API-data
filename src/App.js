import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

// Link example
const URL =
  "https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true";

function App() {
  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <p>{process.env.REACT_APP_API_KEY}</p>
      <div>
        <Routes>
          <Route path="/" element="home" />
          <Route path="/ingredients" element="Ingredients" />
          <Route path="/recipe" element="Recipe" />
          <Route path="/wine" element="Wine" />
        </Routes>
      </div>
    </>
  );
}

export default App;
