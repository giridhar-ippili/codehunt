import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const login = {
  name:"Giridhar",
  email:"",
}
function handleLogin(loginDetails){
  login.name = loginDetails.name
  login.email = loginDetails.email
};
function appRoute() {
  return (
    <App onLoginSubmitInApp = {handleLogin}/>
  );
}
function homeRoute() {
  return (
    <Home LoginValues={login}/>
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

