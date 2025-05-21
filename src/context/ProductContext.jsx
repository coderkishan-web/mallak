import React, { createContext, useState, useEffect } from "react";
import productData from "../data/product.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Set initial products from JSON file
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
