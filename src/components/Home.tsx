import React from 'react';
import {
  Card,
  CardDeck,
  Button,
} from 'react-bootstrap';

const Home = () => {
  return(
    <CardDeck>
      <Card style={{ width: '8px'}}>
        <Card.Img variant="top" src="https://fruitshoppe.firebaseapp.com/images/carambola.jpg" />
        <Card.Body>
          <Card.Title>Carambola</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src="https://fruitshoppe.firebaseapp.com/images/bluebs.jpg" />
        <Card.Body>
          <Card.Title>Bluebs</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src="https://fruitshoppe.firebaseapp.com/images/dragonfruit.jpg" />
        <Card.Body>
          <Card.Title>Dragonfruit</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default Home;