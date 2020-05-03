import React, { useState } from 'react';
import AddContact from './AddContact'

export default function Header(props) {
  setInterval(getTime,1000)
  const now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)
  function getTime(){
    const currentTime = new Date().toLocaleTimeString()
    setTime(currentTime)
  }
  function handleAdditionInHeader(contact) {
    props.onAddInHeader(contact)
  }
  return (
    <header>
    <div className="header-content">
      <h1>Buddies</h1> 
      <h2>{time}</h2> 
      <div className="header-greeting">
      <h5>Hi {props.loggedUser}</h5>  
      <AddContact onAddInHeader={handleAdditionInHeader}/>
      </div>
    </div>    
    </header>    
  );
}
