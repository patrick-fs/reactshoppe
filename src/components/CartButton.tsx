import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { viewCart } from '../actions/cart';
import { RootState } from '../reducers';
import { Button } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { History } from 'history';

const mapDispatch = {
  onViewCart: (history: History) => viewCart(history),
};

const mapState = ({ cartState }: RootState) => ({
  products: cartState.products
});

const connector = connect(
  mapState,
  mapDispatch,
);

type Props = ConnectedProps<typeof connector> & RouteComponentProps;

const CartButton = ({ onViewCart, products, history }: Props) => {
  return(
    <Button onClick={() => onViewCart(history)}>My Cart {products.length} <span className='fa fa-shopping-cart'></span></Button>
  );
};

export default withRouter(connector(CartButton));