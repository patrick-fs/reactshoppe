import React from 'react';
import {
  Container,
  Col,
  Row,
  Jumbotron
} from 'react-bootstrap';

const ThankYou = () => {
  return(
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Thanks!</h1>
            <p className="lead">We hope you enjoy your fruit.</p>
          </Jumbotron>
        </Col>
      </Row>    
    </Container>
   
  );
};

export default ThankYou;