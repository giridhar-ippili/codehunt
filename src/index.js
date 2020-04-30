import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function homeRoute() {
  return (
    <Home/>
  );
}

function appRoute() {
  return (
    <App/>
  );
}

ReactDOM.render((
  <Router>
    <Switch>
     <Route exact path = "/" component = {appRoute}/>
     <Route path = "/home" component = {homeRoute} />
    </Switch>
  </Router>
), document.getElementById('root'))

