import React, { useReducer } from "react";
import FilterContext from "./Context";
import filterReducer from "./reducer";
import dtCategory from "../../data/dtCategorias.json";

function prepareData(data) {
  data.forEach(function(d) {
    d.checked = false;
  });
  return data;
}

function Provider({ children }) {
  const [categoryFilters, dispatchToCategoryFilters] = useReducer(filterReducer, prepareData(dtCategory.data));
  
  return (
    <FilterContext.Provider value={{categoryFilters, dispatchToCategoryFilters}}>
      {children}
    </FilterContext.Provider>
  );
}

export default Provider;
