import React from 'react';
import ConfirmDialog from './ConfirmDialog.jsx'
import EditContact from './EditContact.jsx'
import Grid from '@material-ui/core/Grid';

export default function Tile(props) {
  const contact = {
    id:props.id,
    name:props.name,
    img:props.img,
    phone:props.phone,
    email:props.email,
    gender:props.gender
  }
  function handleEditInTile(contact){
    console.log("Editing in progress")
  }  
  function handleDeleteInTile(){
    props.onDeleteInHome(props.id);
  }
  return (
    <div className='note'>
      <Grid container >
        <Grid item xs={9}>
          <h4>{props.name}</h4>
        </Grid >
        <Grid item xs={3}>
          <EditContact  contactAttached={contact}
                        handleEdit={handleEditInTile}/>
        </Grid >
      </Grid>      
      <img src={props.img} alt='contact-img'></img>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <ConfirmDialog handleDelete={handleDeleteInTile}/>
    </div>  

  );
}
