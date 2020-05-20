import React from "react";
import "../styles.css";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import Grid from "@material-ui/core/Grid";
import FilterCategory from "../state/filterCategory/Provider";
import Products from "../state/product/Provider";

function Loja() {
  return (
    <>
      <FilterCategory>
        <Products>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Categorias />
            </Grid>
            <Grid item xs={9}>
              <Produtos />
            </Grid>
          </Grid>
        </Products>
      </FilterCategory>
    </>
  );
}

export default Loja;