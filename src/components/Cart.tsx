import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import CartItems from './CartItems';
import { CartViewModifier } from '../types/cart';

const Cart = () => {
  return(
    <Container className='cart-container'>
      <Row>
        <Col>
          <span style={{float:'right'}}><Link to="/">Keep shoppe-ing</Link></span>
          <h4>Your Cart</h4>
        </Col>
      </Row>
      <Row>        
        <Col>          
          <CartItems cartView={CartViewModifier.DELETE} />          
          <Link to="/checkout" style={{float:'right', padding:'1rem 0 0 0'}}>
            <Button variant="primary">Continue to Checkout</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Cart;