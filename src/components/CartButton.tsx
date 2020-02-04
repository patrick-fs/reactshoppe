import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { viewCart } from '../actions/cart';
import { RootState } from '../reducers';
import { Button } from 'react-bootstrap';
import { Product } from '../types/product';
import { Link } from "react-router-dom";

const mapDispatch = {
  onViewCart: (products: Product[]) => viewCart(products),
};

const mapState = ({ cartState }: RootState) => ({
  products: cartState.products
});

const connector = connect(
  mapState,
  mapDispatch,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartButton = ({ onViewCart, products }: PropsFromRedux) => {
  return(
    <Link to="/cart" onClick={() => onViewCart(products)}><Button>My Cart {products.length}</Button></Link>
  );
};

export default connector(CartButton);