import React from 'react';
import {
    Button,
  } from 'react-bootstrap';

type CartButtonProps = {
  itemCount?: number,
};

const CartButton = ({ itemCount = 0 }: CartButtonProps) => {
  return(
    <Button variant="dark">My Cart { itemCount } </Button>
  );
};

export default CartButton;