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
          <span style={{float:'right'}}><Link to="/">Keep shoppe-ing</Link></span>
          <h4>Your Cart</h4>
        </Col>
      </Row>
      <Row>        
        <Col>          
          <CartItems cartView={ViewModifier.DELETE} />          
          <Link to="/checkout" style={{float:'right', padding:'1rem 0 0 0'}}>
            <Button variant="primary">Continue to Checkout</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Cart;