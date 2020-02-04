import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../reducers';
import {
  Button,
} from 'react-bootstrap';

const mapState = (state: RootState) => ({
  products: state.cartState.products
});

const connector = connect(
  mapState,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartButton = (props: PropsFromRedux) => {
  return(
    <Button variant="dark" href="/cart">My Cart {props.products.length}</Button>
  );
};

export default connector(CartButton);