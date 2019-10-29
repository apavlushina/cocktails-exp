import React from "react";

export default function CocktailDetail(props) {
  const cocktail = props.cocktail;
  console.log("cocktail", cocktail);
  return (
    <div>
      <h2>{cocktail.drink}</h2>

      <p>
        <img src={cocktail.thumbnail} alt="cocktail" />
      </p>

      <p>{cocktail.instructions}</p>
    </div>
  );
}
