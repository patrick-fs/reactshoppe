import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import {
  ListGroup, Button
} from 'react-bootstrap';
import { RootState } from '../reducers';
import { ViewModifier } from '../types/cart';
import { removeFromCart } from '../actions/cart';

const mapState = ({ cartState }: RootState) => ({
  products: cartState.products
});

const mapDispatch = {
  onRemoveFromCart: (location: number) => removeFromCart(location),
};

const connector = connect(
  mapState,
  mapDispatch,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  cartView?: ViewModifier
}

const CartItems = ({ products, onRemoveFromCart, cartView }: Props) => {
  return (
    <ListGroup>
      { products.map((product, i) => (
        <ListGroup.Item key={i}>
          {product.title} <span className='text-muted'>{product.quantity}</span>
          <span className='cart-price'>${product.price}
            {cartView === ViewModifier.DELETE &&
              <span className='fa fa-times text-danger' onClick={() => onRemoveFromCart(i)}></span>
            }
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default connector(CartItems);