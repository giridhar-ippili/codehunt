import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

export default function Form() {
  const [newContact, setContact] = useState({
    key:0,
    name:"",
    img:"",
    phone:"",
    email:"",
    gender:""
  })
  const [open, setOpen] = useState(false);
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
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <form className="add-contact-form" onSubmit={handleSubmit}>
      <DialogTitle className="dialog-title">Add Contact</DialogTitle>
      <DialogContent>        
        <Grid container >
          <Grid item xs={12}>
            <TextField label = "Name"
                       variant = "outlined"
                       className = "text-Input"
                       name = "name"
                       type = "text"
                       fullWidth
                       required
                       value = {newContact.name}
                       onChange = {handleChange}
                 />
          </Grid>
          <Grid item xs={12}>
                 <TextField label="Email" 
                            variant="outlined" 
                            className="text-Input" 
                            name="email" 
                            type="email"
                            fullWidth
                            required
                            value={newContact.email} 
                            onChange={handleChange}/> 
          </Grid>
          <Grid item xs={12}>
                 <TextField label="Mobile number" 
                            variant="outlined" 
                            className="text-Input" 
                            type="number"
                            fullWidth
                            required 
                            name="phone" 
                            value={newContact.phone} 
                            onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
          <FormControl className="dropdown" required>
            <InputLabel>Gender</InputLabel>
            <Select label="Gender"
                    name="gender" 
                    variant="outlined"
                    native
                    required 
                    value={newContact.gender} 
                    onChange={handleChange}
            >
              <option value=""/>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"idiot"}>I don't know</option>
            </Select>
          </FormControl>
          </Grid>
        </Grid>   
        </DialogContent>
        <DialogActions className="actions">
            <div>
            <Button  onClick={handleClose}>Cancel</Button>
            <Button  type="submit" variant="outlined" color="primary" >Add Contact</Button>            
          </div>
        </DialogActions>        
        </form>
      </Dialog>
  );
}
