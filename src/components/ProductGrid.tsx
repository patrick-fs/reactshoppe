import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { Product } from '../services/product';

type ProductGridProps = { productList: Product[] };

const COLUMN_COUNT = 3;

const ProductGrid = ({ productList }: ProductGridProps) => {
  let productMatrix: Product[][] = [];
  let innerArray: Product[] = [];
  let totalProductsAdded = 0;
  productList.forEach(el => {    
    innerArray.push(el);
    if (innerArray.length === COLUMN_COUNT) {
      totalProductsAdded += COLUMN_COUNT;
      productMatrix.push(innerArray);
      innerArray = [];
    }
  });

  // handle any remaining elements
  productMatrix.push(productList.slice(totalProductsAdded));

  return(
    <Container>
      { productMatrix.map((el, i) => {
        return (
          <Row key={i}>
            { el.map((product, j) => {
              return (
              <Col key={j} md={4}>
                <ProductCard 
                  title = {product.title} 
                  description = {product.description}
                  price = {product.price}
                  image = {product.image} />
              </Col>);
            })}
          </Row>);
      })}
    </Container>
  );
}

export default ProductGrid;
