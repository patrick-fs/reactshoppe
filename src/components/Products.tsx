import React, { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';
import { getProducts, Product } from '../services/product';

const Products = () => {
  const [productList, setProductList] = useState([] as Product[]);

  useEffect(() => {
    getProducts().then(products => setProductList(products));
  }, []);

  return(
    <ProductGrid productList={ productList } />
  );
};

export default Products;
