import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import {
  ListGroup
} from 'react-bootstrap';
import { RootState } from '../reducers';

const mapState = ({ cartState }: RootState) => ({
  products: cartState.products
});

const connector = connect(
  mapState,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartItems = ({ products }: PropsFromRedux) => {
  return (
    <ListGroup>
      { products.map((product) => (
        <ListGroup.Item>
          {product.title} <span className='text-muted'>{product.quantity}</span>
          <span className='cart-price'>${product.price}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default connector(CartItems);