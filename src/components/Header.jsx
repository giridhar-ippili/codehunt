import React from 'react';
import Popup from 'reactjs-popup';
import Form from './Form'


function Header() {
  return (
    <header>
      <h1>Buddies</h1> 
      <Popup trigger={<button>Add +</button>} 
      position="bottom right"
      closeOnDocumentClick
      >
      <div>
        <Form />
      </div>
  </Popup>
    </header>    
  );
}

export default Header;