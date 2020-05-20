import * as filterTypes from "./types";

export function categoryFilter(filters) {

  return {
    type: filterTypes.CATEGORY_FILTER,
    payload: {
      filters
    }
  };
}
