import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';

export default function AddContact() {
    const [newContact, setContact] = useState({
        key:0,
        name:"",
        img:"",
        phone:"",
        email:"",
        gender:""
      })
      const [open, setOpen] = React.useState(false);
    
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
        setOpen(false);
      }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <Fab className = "add-button" onClick={handleClickOpen}><AddIcon/></Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
        <DialogContent>        
        <FormControl className="add-contact-form">
            <TextField label="Name" 
                            variant="outlined" 
                            className="text-Input" 
                            name="name"                              
                            type="text"
                            fullWidth
                            value={newContact.name} 
                            onChange={handleChange}/>
            <TextField label="Email" 
                            variant="outlined" 
                            className="text-Input" 
                            name="email" 
                            type="email"
                            fullWidth
                            value={newContact.email} 
                            onChange={handleChange}/>
            <TextField label="Mobile number" 
                            variant="outlined" 
                            className="text-Input" 
                            type="number"
                            fullWidth 
                            name="phone" 
                            value={newContact.phone} 
                            onChange={handleChange}/>
            <Select name="gender" 
                  value={newContact.gender} 
                  onChange={handleChange}
                  displayEmpty
                  autoWidth>
            <MenuItem value="" selected disabled>gender</MenuItem>      
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="idiot">I don't know</MenuItem>
          </Select>              
        </FormControl>
        </DialogContent>
        <DialogActions>
            <div>
            <Button className="submit-button" onClick={handleSubmit}>Add Contact</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}