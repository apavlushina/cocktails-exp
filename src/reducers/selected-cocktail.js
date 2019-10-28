const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case "SELECT_COCKTAIL":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
