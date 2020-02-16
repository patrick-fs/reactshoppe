import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';
import CartItems from './CartItems';

const Checkout = () => {
  return(
    <Container className='checkout-container'>
        <Row>
          <Col md={4} className='order-md-2'>
            <h4>Your Cart</h4>
            <CartItems />
          </Col>
          <Col md={8} className='order-md-1'>
            <CheckoutForm />            
          </Col>
        </Row>
    </Container>
  );
}

export default Checkout;