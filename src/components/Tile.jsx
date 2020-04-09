import React from 'react';

function Tile(props) {
  return (
    <div className='note'>
        <h3>{props.name}</h3>
        <img src={props.img} alt='contact-img'></img>
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>  
  );
}

export default Tile;