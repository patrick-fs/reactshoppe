import React from 'react';
import Products from './Products';
import Checkout from './Checkout';
import Cart from './Cart';
import Navigation from './Navigation';
import {
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div>      
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
