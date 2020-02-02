import React from 'react';
import './App.css';
import Home from './Home';
import Market from './Market';
import Checkout from './Checkout';
import Navigation from './Navigation';
import {
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">      
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
