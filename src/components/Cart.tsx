import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { removeFromCart } from '../actions/cart';
import { RootState } from '../reducers';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import CartItems from './CartItems';
import { ViewModifier } from '../types/cart';

const Cart = () => {
  return(
    <Container>
      <Row>
        <Col>
          <CartItems cartView={ViewModifier.DELETE} />          
          <Link to="/checkout"><Button variant="primary">Checkout</Button></Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Cart;