import React, { useState, useContext, useEffect } from "react";
import ProdutosDetalhe from "./ProdutosDetalhe";
import Grid from "@material-ui/core/Grid";
import CategoryContext from "../state/filterCategory/Context";
import ProductsContext from "../state/product/Context";

function filteredList(products, categoryFilters) {
    let categorias = categoryFilters.filter(item => {
        return item.checked;
    }).map(function(item) { return item.nome; });

    if (categorias.length === 0)
        return products;

    console.log(categorias);

    let produtos = products.filter(item => { return categorias.includes(item.categoria) });
    console.log(produtos)

    return produtos;
}

function Produtos() {
  const { categoryFilters } = useContext(CategoryContext);
  const { products } = useContext(ProductsContext);

  const [produtos, setProdutos] = useState(
    filteredList(products, categoryFilters)
  );

  useEffect(() => {
    setProdutos(filteredList(products, categoryFilters));
  }, [categoryFilters, products, setProdutos]);

  return (
    <>
      <Grid container spacing={3}>
        {produtos.map(p => {
          return <ProdutosDetalhe {...p} />;
        })}
      </Grid>
    </>
  );
}

export default Produtos;
