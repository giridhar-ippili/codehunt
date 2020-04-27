import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";


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
     <Route exact path = "/" component = {appRoute}/>
     <Route path = "/home" component = {homeRoute} />
  </Router>
), document.getElementById('root'))

