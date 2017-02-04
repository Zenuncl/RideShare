// Library
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Pages
import App from './App';
import Payment from './Payment';
import IndexPage from './IndexPage';

// Styles
import './styles.min.css';
import './App.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/payment" component={Payment} />
    </Route>
  </Router>
), document.getElementById('root'));
