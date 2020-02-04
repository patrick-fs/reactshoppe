import React, { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';
import { getProducts } from '../services/product';
import { Product } from "../types/product";

const Products = () => {
  const [productList, setProductList] = useState([] as Product[]);

  useEffect(() => {
    // TODO: wire this in through a Redux action
    getProducts().then(products => setProductList(products));
  }, []);

  return(
    <ProductGrid productList={ productList } />
  );
};

export default Products;
