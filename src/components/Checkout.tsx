import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return(
    <Container className='checkout-container'>
        <Row>
          <Col md={4} className='order-md-2'>
            <h4>Your Cart</h4>
            <CartItems />
            <Link style={{float:'right', padding:'1rem 1rem 0 0'}} to="/cart">Edit Cart</Link>
          </Col>
          <Col md={8} className='order-md-1'>
            <CheckoutForm />            
          </Col>
        </Row>
    </Container>
  );
}

export default Checkout;