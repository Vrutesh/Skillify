import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog({testlink}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        Exit Quiz
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Skillify"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to Exit Quiz ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Link to={testlink}>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
