import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
  <>
    <Link to="/">Home</Link>
    <Link to="/market">Market</Link>
    <Link to="/checkout">Checkout</Link>
  </>);
}

export default Navigation;