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

const mapDispatch = {
  onRemoveFromCart: (location: number) => removeFromCart(location),
};

const mapState = ({ cartState }: RootState) => ({
  products: cartState.products
});

const connector = connect(
  mapState,
  mapDispatch,
);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Cart = ({ onRemoveFromCart, products }: PropsFromRedux) => {
  return(
    <Container>
      <Row>
        <Col>
          { products.map((product, i) => (
            <div key={i}>{product.title} <Button variant="link" onClick={() => onRemoveFromCart(i)}>remove</Button></div>
          ))}
          
          <Link to="/checkout"><Button variant="primary">Checkout</Button></Link>
        </Col>
      </Row>
    
    </Container>
  )
};

export default connector(Cart);