import React, { useState, useContext, useEffect, useCallback } from "react";
//import dtCategorias from "../data/dtCategorias.json";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import CategoryContext from "../state/filterCategory/Context";
import * as filterCategoryActions from "../state/filterCategory/actions";

function Categorias() {
  const { categoryFilters, dispatchToCategoryFilters } = useContext(
    CategoryContext
  );
  const [selectedValues, setSelectValues] = useState(categoryFilters);

  const handleCheckChange = useCallback(
    evt => {
      let newCategorias = selectedValues.map(el =>
        el.nome === evt.target.value
          ? { ...el, checked: evt.target.checked }
          : el
      );

      setSelectValues(newCategorias);
    },
    [setSelectValues, selectedValues]
  );

  const updateCategoryFilters = useCallback(
    filters => {
      dispatchToCategoryFilters(filterCategoryActions.categoryFilter(filters));
    },
    [dispatchToCategoryFilters]
  );

  useEffect(() => {
    updateCategoryFilters(selectedValues);
    //console.log(selectedValues);
  }, [selectedValues, updateCategoryFilters]);

  //const [categorias, setCategorias] = useState(dtCategorias.data);
  return (
    <div>
      <h3>Categorias ({selectedValues.length})</h3>
            
      <List component="nav" aria-label="contacts">
        {selectedValues.map(d => {
          return (
            <ListItem button>
              <ListItemText primary={d.nome} />
              <Checkbox
                edge="end"
                onChange={handleCheckChange}
                value={d.nome}
              />
            </ListItem>
          );
        })}
        ;
      </List>
            
    </div>
  );
}
export default Categorias;
