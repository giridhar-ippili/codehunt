import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function ConfirmDialog(props) {
  const [open, setOpen] = useState(false);
  
  function handleSubmit() {
    props.handleDelete();
    setOpen(false);
  }
  const  handleClickOpen = () => {
    setOpen(true);
  }; 
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>    
      <Button className = "delete-button" onClick={handleClickOpen}>Delete</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="dialog-title">Delete Contact ?</DialogTitle>
          <DialogContent><p>Are you sure you want to permenantly delete this contact?</p></DialogContent>
          <DialogActions>            
            <div>
              <Button  onClick={handleClose}>Cancel</Button>
              <Button  variant="outlined" color="primary"onClick={handleSubmit}>Delete</Button>            
            </div>
          </DialogActions>
        </Dialog>
    </div>    
  );
}
