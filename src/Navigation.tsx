import React from 'react';
import { 
  Button, 
  Navbar,
  Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Reactshoppe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="/market">Market</Nav.Link>
        <Nav.Link href="/checkout">Checkout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;