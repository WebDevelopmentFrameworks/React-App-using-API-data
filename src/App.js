import "./App.css";

// Link example
const URL =
  "https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>{process.env.REACT_APP_API_KEY}</p>
    </div>
  );
}

export default App;
