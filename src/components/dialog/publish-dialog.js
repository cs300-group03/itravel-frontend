import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function PublishAlertDialog( {open, handleClose} ) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to publish this schedule?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All iTravel users will be able to see this schedule and duplicate it.
            Let's add some description!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            multiline
            maxRows={6}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleClose} autoFocus>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
