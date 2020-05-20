import React, { useReducer } from "react";
import ProductsContext from "./Context";
import productsReducer from "./reducer";
import dtProducts from "../../data/dtProdutos.json";

function Provider({ children }) {

  const [products, dispatchProducts] = useReducer(productsReducer, dtProducts.data);

  return (
    <ProductsContext.Provider value={{products, dispatchProducts}}>
      {children}
    </ProductsContext.Provider>
  );
}

export default Provider;
