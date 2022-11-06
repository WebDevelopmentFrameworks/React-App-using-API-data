import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header, RecipeByName, Footer, About, Home } from "./components";

function App() {
  return (
    <div id="Content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<RecipeByName />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
