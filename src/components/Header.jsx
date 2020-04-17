import React, { useState } from 'react';
// import Container from '@material-ui/core/Container';
import Popup from 'reactjs-popup';
import Form from './Form'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';

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
        trigger={<Fab className = "add-button"><AddIcon/></Fab>} 
        position="bottom right"
      >
        <Form />
      </Popup>
    </div>
    
    </header>    
  );
}

export default Header;