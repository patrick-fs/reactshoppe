import React from 'react';
import { 
  Navbar,
  Nav } from 'react-bootstrap';
import CartButton from './CartButton';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand><Link to="/" className="headerLink">Reactshoppe</Link></Navbar.Brand>
      <Nav className="mr-auto"></Nav>
        <Nav>
          <CartButton />
        </Nav>
    </Navbar>
  );
}

export default Navigation;