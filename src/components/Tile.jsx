import React from 'react';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button'
function Tile(props) {
  return (
    <div className='note'>
     {/* <Button><EditIcon/></Button> */}
      <h3>{props.name}</h3>
      <img src={props.img} alt='contact-img'></img>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <Button className = "delete-button">Delete</Button>
    </div>  

  );
}

export default Tile;