import React from 'react';
import Login from './Login.jsx'


export default function App(props) {
  function handleLogin(login){
    console.log(login);
  }
  return (
    <div >
    <Login onLoginSubmit = {handleLogin}/>
    </div>
  );
}
