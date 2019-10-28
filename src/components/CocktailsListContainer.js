import React from "react";

import { connect } from "react-redux";
import CocktailsList from "./CocktailsList";

class CocktailsListContainer extends React.Component {
  selectCocktail = id => {
    this.props.dispatch({
      type: "SELECT_COCKTAIL",
      payload: id
    });
  };

  render() {
    return (
      <CocktailsList
        cocktails={this.props.cocktails}
        selectCocktail={this.selectCocktail}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails
  };
};

export default connect(mapStateToProps)(CocktailsListContainer);
