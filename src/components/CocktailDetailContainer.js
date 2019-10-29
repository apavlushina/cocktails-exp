import React from "react";
import { connect } from "react-redux";
import CocktailDetail from "./CocktailDetail";

const mapStateToProps = state => {
  console.log("state", state);
  if (state.selectCocktails !== null) {
    console.log("state.selectCocktail", state.selectCocktails);
    return {
      cocktail: state.cocktails.find(
        cocktail => cocktail.id === state.selectCocktails
      )
    };
  }
  return {};
};

class CocktailDetailContainer extends React.Component {
  render() {
    const cocktail = this.props.cocktail;
    if (!cocktail) return null;
    return <CocktailDetail cocktail={cocktail} />;
  }
}

export default connect(mapStateToProps)(CocktailDetailContainer);
