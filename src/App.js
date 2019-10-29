import React from "react";
import "./App.css";
import CocktailsListContainer from "./components/CocktailsListContainer";
import CocktailDetailContainer from "./components/CocktailDetailContainer";

function App() {
  return (
    <div className="App">
      <CocktailsListContainer />
      <CocktailDetailContainer />
    </div>
  );
}

export default App;
