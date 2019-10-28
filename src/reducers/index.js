import { combineReducers } from "redux";
import cocktails from "./cocktails";
import selectCocktails from "./selected-cocktail";

export default combineReducers({
  cocktails,
  selectCocktails
});
