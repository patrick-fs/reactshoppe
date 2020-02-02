import React from 'react';
import { Product } from '../services/product';
import {
  Card,
  Button,
} from 'react-bootstrap';

const ProductCard = ({ title, price, description, image }: Product) => {
  return(
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title} - ${price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="outline-primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;