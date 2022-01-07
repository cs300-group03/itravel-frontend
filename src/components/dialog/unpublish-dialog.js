import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { publishSchedule } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCurrentSchedule } from '../../store/schedule';

export default function UnPublishAlertDialog( {open, handleClose} ) {
  const schedule = useSelector(state => state.schedule.currentSchedule);
  const dispatch = useDispatch();

  async function unpublish() {
    const response = await publishSchedule(schedule._id);
    if (response) {
      dispatch(toggleCurrentSchedule());
      handleClose();
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
          {"Are you sure to unpublish this schedule?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={unpublish} autoFocus>
            Unpublish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
