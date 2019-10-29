import React from "react";

export default function CocktailsList(props) {
  return (
    <div>
      <h1>Cocktail Explorer</h1>
      <ul>
        {props.cocktails.map(cocktail => (
          <li
            key={cocktail.id}
            onClick={() => props.selectCocktail(cocktail.id)}
          >
            {cocktail.drink}, {cocktail.glass}
            <button onClick={() => props.deleteCocktail(cocktail.id)}>
              Delete me
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
