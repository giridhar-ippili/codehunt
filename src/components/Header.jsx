import React, { useState } from 'react';
import AddContact from './AddContact'

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
      <AddContact/>
    </div>    
    </header>    
  );
}

export default Header;