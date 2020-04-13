import React from 'react';
import Popup from 'reactjs-popup';
import Form from './Form'


function Header() {
  return (
    <header>
      <h1>Buddies</h1> 
      <Popup 
        modal 
        trigger={<button className="add-button">Add +</button>} 
        position="bottom right"
      >
      <div>
        <Form />
      </div>
      </Popup>
    </header>    
  );
}

export default Header;