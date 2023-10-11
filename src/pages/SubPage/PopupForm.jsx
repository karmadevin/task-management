import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PopupForm.css";
import { Switch } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PopupForm({onClose}) {
  return (
    <div className='fix' style={{ padding: '30px',width:"550px" }}>
      <div className='headclose'>
      <h2>Add a New Task</h2>
      <CloseIcon onClick={onClose}></CloseIcon>
      </div>
      <form>
        <div className='segone'>
        <label className='label'>Title*</label>
        <TextField  className='textfield' size="small"/></div>

        <div className='segone'>
        <label className='label'>Milestone*</label>
        <TextField label="Design"  className='textfield' size="small"/></div>

        <div className='segone'>
        <label className='label'>Status*</label>
        <TextField label="New" className='textfield' size="small"/></div>

        <div className='segone'>
        <label className='label'>Priority*</label>
        <TextField label="Normal" className='textfield' size="small"/></div>

        <div className='segone'>
        <label className='label'>Assign User</label>
        <TextField  className='textfield' size="small"/></div>

        <div className='segone'>
        <label className='label'>Assign Client</label>
        <TextField  className='textfield' size="small"/></div>


        {/* <TextField label="Email" variant="outlined" fullWidth margin="normal" /> */}
        <div className='secondsec'>
        <div className='segtwo'>
        <label className='label'>Description</label>
        <Switch/>
        </div>

        <div className='segtwo'>
        <label className='label'>More Information</label>
        <Switch/>
       </div>

        <div className='segtwo'>
        <label className='label'>Options</label>
        <Switch/>
       </div>
        </div>
        <div className='taskbtn'>
        <Button type="submit" variant='outlined' color="primary">
          Close
        </Button>
        <Button type="submit" variant="contained" color="error">
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
}

export default PopupForm;
