import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Start from './Start/Start.react';
import Products from './Products/Products.react';

import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Route path='/' component={Start} />
          <Route path='products/:latitude/:longitude' component={Products} />
        </Router>
    );
  }
}

export default App;