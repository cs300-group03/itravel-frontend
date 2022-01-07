import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { publishSchedule } from '../../services';
import { Alert } from '@mui/material';
import { toggleCurrentSchedule } from '../../store/schedule';

export default function PublishAlertDialog( {open, handleClose} ) {
  const schedule = useSelector(state => state.schedule.currentSchedule);
  const [description, setDescription] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const dispatch = useDispatch();

  const changeDescription = (e) => {
    setDescription(e.target.value);
  }

  async function publish() {
    const response = await publishSchedule(schedule._id, description);
    if (response) {
      dispatch(toggleCurrentSchedule());
      handleClose();
    } else {
      setErrorMessage('Cannot publish.');
    }
  }

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
            onChange={changeDescription}
          />
          {errorMessage && <Alert severity="error" onClose={() => {}}>{errorMessage}</Alert>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={publish} autoFocus>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
