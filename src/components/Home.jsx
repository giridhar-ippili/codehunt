import React, { useState } from 'react';
import Header from "./Header.jsx"
import Footer from './Footer.jsx';
import Tile from './Tile.jsx';
import AddIcon from '@material-ui/icons/Add';


export default function Home(props) {
    let name = props.LoginValues.name;
    const [contacts,setContacts] = useState([])
    const [emptyArray, setEmptyArray] = useState(true)
    function assignContact(contact,index){  
      return (
        <Tile 
        key={index}
        id={index}
        name={contact.name}
        img={contact.img}
        phone={contact.phone}
        email={contact.email}
        onDeleteInHome={handleDeletionInApp}
        />
      )
    }
    function handleAdditionInApp(contact){
      setEmptyArray(false)
      setContacts(prevContacts => {
        return [...prevContacts,contact];
      });
    }
    function handleDeletionInApp(id){
      setContacts(prevContacts => {
        return prevContacts.filter((contact, index) => {
          return index!== id;
        })
      });
      if(contacts.length === 1 || contacts.length === 0){
        setEmptyArray(true)
      }      
    }
    return (
      <div >
        <Header onAddInHeader={handleAdditionInApp}
                loggedUser={name}
        />
        {contacts.map( (eachContact,index ) => (assignContact(eachContact,index)))}
        {emptyArray && <h5 className="initial-text">Your contacts looks empty. Click on <AddIcon/> button to add.</h5>}
        <Footer/>
      </div>
    );
  }