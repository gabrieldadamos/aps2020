import * as filterTypes from "./types";

function reducer(_, action) {
  switch (action.type) {
    case filterTypes.CATEGORY_FILTER:
      return action.payload.filters;
    default:
      throw new Error();
  }
}

export default reducer;
