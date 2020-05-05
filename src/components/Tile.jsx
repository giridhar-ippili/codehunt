import React from 'react';
import ConfirmDialog from './ConfirmDialog.jsx'
import EditContact from './EditContact.jsx'
import Grid from '@material-ui/core/Grid';

export default function Tile(props) {
  return (
    <div className='note'>
      <Grid container >
        <Grid item xs={9}>
          <h4>{props.name}</h4>
        </Grid >
        <Grid item xs={3}>
          <EditContact/>
        </Grid >
      </Grid>      
      <img src={props.img} alt='contact-img'></img>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <ConfirmDialog/>
    </div>  

  );
}
