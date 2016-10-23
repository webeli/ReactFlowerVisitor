import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Start from './Start/Start.react';
import Shop from './Shop/Shop.react';

import store from '../store';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Route path='/' component={Start} />
          <Route path='shop/:latitude/:longitude' component={Shop} />
        </Router>
    );
  }
}

export default App;