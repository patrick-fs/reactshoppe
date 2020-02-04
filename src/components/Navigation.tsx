import React from 'react';
import { 
  Navbar,
  Nav } from 'react-bootstrap';
import CartButton from './CartButton';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand><Link to="/" className="headerLink">Reactshoppe</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
      <Nav>
        <CartButton />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;