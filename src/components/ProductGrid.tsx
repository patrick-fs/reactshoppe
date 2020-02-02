import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { Product } from '../services/product';

type ProductGridProps = { 
  productList: Product[],
  columnCount?: number,
};

const BOOTSTRAP_GRID_WIDTH = 12;

const ProductGrid = ({ productList, columnCount = 3 }: ProductGridProps) => {
  let productRows: Product[][] = [];
  let productColumns: Product[] = [];
  productList.forEach(product => {    
    productColumns.push(product);
    if (productColumns.length === columnCount) {
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
              <Col key={j} md={Math.ceil(BOOTSTRAP_GRID_WIDTH / columnCount)}>
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
