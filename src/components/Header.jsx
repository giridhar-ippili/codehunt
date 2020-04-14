import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Form from './Form'

function Header() {
  setInterval(getTime,1000)
  const now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)
  function getTime(){
    const currentTime = new Date().toLocaleTimeString()
    setTime(currentTime)
  }
  return (
    <header>
    <div className="header-content">
      <h1>Buddies</h1> 
      <h2>{time}</h2>    
      <Popup 
        modal 
        trigger={<button className="add-button">Add +</button>} 
        position="bottom right"
      >
      <div>
        <Form />
      </div>
      </Popup>
    </div>
    </header>    
  );
}

export default Header;