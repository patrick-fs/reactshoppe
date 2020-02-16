import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { viewCart } from '../actions/cart';
import { RootState } from '../reducers';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const mapDispatch = {
  onViewCart: () => viewCart(),
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
    <Link to="/cart" onClick={() => onViewCart()}><Button>My Cart {products.length} <span className='fa fa-shopping-cart'></span></Button></Link>
  );
};

export default connector(CartButton);