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
  let productRows: Product[][] = [];
  let productColumns: Product[] = [];
  productList.forEach(el => {    
    productColumns.push(el);
    if (productColumns.length === COLUMN_COUNT) {
      productRows.push(productColumns);
      productColumns = [];
    }
  });

  // handle any remaining products
  productRows.push(productColumns);

  return(
    <Container>
      { productRows.map((productColumn, i) => {
        return (
          <Row key={i}>
            { productColumn.map((product, j) => {
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
