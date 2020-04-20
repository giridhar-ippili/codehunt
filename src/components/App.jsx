import React, { useState } from 'react';
import Header from "./Header.jsx"
import Footer from './Footer.jsx';
import Tile from './Tile.jsx';
// import Contacts from '../Contacts.jsx'

function assignContact(contact,index){
  
  return (
    <Tile 
    key={index}
    id={index}
    name={contact.name}
    img={contact.img}
    phone={contact.phone}
    email={contact.email}
    />
  )
}
function App() {
  const [contacts,setContacts] = useState([])
  function handleAdditionInApp(contact){
    setContacts(prevContacts => {
      return [...prevContacts,contact];
    });
  }
  return (
    <div >
      <Header onAddInHeader={handleAdditionInApp}/>
      {contacts.map( (eachContact,index ) => (assignContact(eachContact,index)))}
      <Footer/>
    </div>
  );
}

export default App;