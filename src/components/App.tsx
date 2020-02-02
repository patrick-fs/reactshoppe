import React from 'react';
import Products from './Products';
import Checkout from './Checkout';
import Navigation from './Navigation';
import {
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">      
      <header>
        <Navigation />
      </header>
      <Switch>
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
