import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Form() {
  const [newContact, setContact] = useState({
    key:0,
    name:"",
    img:"",
    phone:"",
    email:"",
    gender:""
  })

  function handleChange(event){

    const {name, value} = event.target
    if(name === "name"){
      newContact.name = value
    }else if(name === "phone"){
      newContact.phone = value
    }else if(name === "email"){
      newContact.email = value
    }else if(name === "gender"){
      newContact.gender = value
    }
    setContact({
      ...newContact,   
    });

  }
  function handleSubmit() {
    console.log(newContact)
  }
  return (
    <Card>
      <CardContent>
      <CardHeader><h4>Add Contact</h4></CardHeader>
        <FormControl>         
            <label>
            Name:<TextField label="Name" 
                            variant="outlined" 
                            className="text-Input" 
                            name="name" 
                            value={newContact.name} 
                            onChange={handleChange}/>
          </label>
          <label>
            Email:<TextField label="Email" 
                            variant="outlined" 
                            className="text-Input" 
                            name="email" 
                            value={newContact.email} 
                            onChange={handleChange}/>
          </label>
          <label>
            Phone: <TextField label="Mobile number" 
                            variant="outlined" 
                            className="text-Input" 
                            name="phone" 
                            value={newContact.phone} 
                            onChange={handleChange}/>
          </label>
          <label>
          Gender:
          <Select name="gender" 
                  value={newContact.gender} 
                  onChange={handleChange}
                  displayEmpty
                  autoWidth>
            <MenuItem value="" selected disabled>Select an option</MenuItem>      
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="idiot">I don't know</MenuItem>
          </Select>
        </label>                  
        </FormControl>
        </CardContent>
        <CardActions>
          <div>
            <Button className="submit-button" onClick={handleSubmit}>Add Contact</Button>
            <Button>Cancel</Button>
          </div>
       </CardActions>
    </Card>
  );
}

export default Form;