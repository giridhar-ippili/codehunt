import React from 'react';
import Header from "./Header.jsx"
import Footer from './Footer.jsx';
import Tile from './Tile.jsx';
import Contacts from '../Contacts.jsx'

function assignContact(contact){
  return (
    <Tile 
    key={contact.id}
    name={contact.name}
    img={contact.img}
    phone={contact.phone}
    email={contact.email}
    />
  )
}
function App() {
  return (
    <div >
      <Header/>
      {Contacts.map( assignContact )}
      <Footer/>
    </div>
  );
}

export default App;