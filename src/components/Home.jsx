import React, { useState } from 'react';
import Header from "./Header.jsx"
import Footer from './Footer.jsx';
import Tile from './Tile.jsx';
import AddIcon from '@material-ui/icons/Add';

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
  export default function App() {
    const [contacts,setContacts] = useState([])
    const [emptyArray, setEmptyArray] = useState(true)
    function handleAdditionInApp(contact){
      setEmptyArray(false)
      setContacts(prevContacts => {
        return [...prevContacts,contact];
      });
    }
    return (
      <div >
        <Header onAddInHeader={handleAdditionInApp}/>
        {contacts.map( (eachContact,index ) => (assignContact(eachContact,index)))}
        {emptyArray && <h5 className="initial-text">Your contacts looks empty. Click on <AddIcon/> button to add.</h5>}
        <Footer/>
      </div>
    );
  }