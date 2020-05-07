import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from 'styles/modal';

const Modal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

  };
  
  return(
    <>
      <Fab 
        className={classes.fab}
        aria-label="apply" 
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
        <DialogTitle id="apply-partner" className={classes.title}>
            파트너 신청하기
        </DialogTitle>
        <TextField 
          id="ownerName" 
          label="대표자명" 
          variant="outlined" 
          className={classes.textField}
        />
        <TextField 
          id="storeName" 
          label="가게 이름" 
          variant="outlined" 
          className={classes.textField}
        />
        <TextField 
          id="phone" 
          label="연락처" 
          variant="outlined" 
          className={classes.textField}
        />
        <TextField 
          id="address" 
          label="주소" 
          variant="outlined" 
          className={classes.textField}
        />
        <TextField 
          id="content" 
          label="전달사항" 
          variant="outlined" 
          multiline rows="3" 
          className={classes.textField}
        />
        <DialogActions>
          <Button onClick={handleSubmit} className={classes.button}>
            신청하기
          </Button>
          <Button onClick={handleClose} className={classes.button}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
