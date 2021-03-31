import axios from "axios";
import { useState } from "react";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "c2608c58";
  const APP_KEY = "7e30a586596f99d693801375451f98df";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (!query) {
      setAlert("Please fill the form");
      return;
    }
    setAlert("Searching... ");
    const { data } = await axios.get(url);
    console.log(data);
    if (!data.more) {
      setAlert("Sorry , No recipe found ");
      return;
    }
    setAlert("");
    setQuery("");
    setRecipes(data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Recipe</h1>
        <form className="search-form" onSubmit={onSubmit}>
          {alert && <Alert alert={alert} />}
          <input
            type="text"
            placeholder="Search Recipe"
            autoComplete="off"
            onChange={onChange}
            value={query}
          />
          <input type="submit" value="Search" />
        </form>
      </header>
      <main>
        <div className="recipes">
          {recipes.length &&
            recipes.map((recipe, index) => {
              const key = `recipe-${index}`;
              return <Recipe key={key} recipe={recipe} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
