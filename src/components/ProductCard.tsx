import React from 'react';
import { Product } from "../types/product";
import { addToCart } from '../actions/cart';
import { connect, ConnectedProps } from 'react-redux'
import {
  Card,
  Button,
} from 'react-bootstrap';

const mapDispatch = {
  onAddToCart: (product: Product) => addToCart(product),
};

const connector = connect(
  null,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  product: Product
};

const ProductCard = ({ onAddToCart, product }: Props) => {  
  return(
    <Card>
      <div style={{backgroundImage: `url(${product.image})`}} className="product-image"></div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <span className='price'>${product.price} {product.unit}</span>
        <Button className='cart-button' variant="outline-primary" onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default connector(ProductCard);