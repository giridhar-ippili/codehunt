import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App.jsx';
import Home from './Home.jsx'

ReactDOM.render((
    <Router history = {browserHistory}>
       <Route path = "/" component = {App}>
          <IndexRoute component = {Home} />
          <Route path = "home" component = {Home} />
       </Route>
    </Router>
 ), document.getElementById('app'))