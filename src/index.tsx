import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import * as FullStory from '@fullstory/browser';
import SentryFullStory from '@sentry/fullstory';
import store from './store';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const release = 'v1.0.0';

FullStory.init({ orgId: 'QNEN8' });

Sentry.init({
  dsn: 'https://87dd10a700ea41e9a64df50ec9b367c7@sentry.io/2418505',
  integrations: [ new SentryFullStory('sentry-test') ],
  release
});

document.body.className = 'bg-light';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
