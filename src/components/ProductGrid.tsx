import React from 'react';
import {
  Card,
  Container,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductGrid = () => {
return(
  <Container>
    <Row>
      <Col md={4}>
        <ProductCard 
          title = "Carambola" 
          description = "Some quick example text to build on the card title and make up the bulk of the card's content."
          price = "2.99 ea."
          image = "https://fruitshoppe.firebaseapp.com/images/carambola.jpg" />        
      </Col>
      <Col md={4}>
      <ProductCard 
          title = "Bluebs" 
          description = "Some quick example text to build on the card title and make up the bulk of the card's content."
          price = "2.99 ea."
          image = "https://fruitshoppe.firebaseapp.com/images/bluebs.jpg" />
      </Col>
      <Col md={4}>
      <ProductCard 
          title = "Dragonfruit" 
          description = "Some quick example text to build on the card title and make up the bulk of the card's content."
          price = "2.99 ea."
          image = "https://fruitshoppe.firebaseapp.com/images/dragonfruit.jpg" />
      </Col>
    </Row>
  </Container>
);
}

export default ProductGrid;