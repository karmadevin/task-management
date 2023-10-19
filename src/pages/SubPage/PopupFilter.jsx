import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PopupFilter.css";
import { Switch } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PopupFilter({onClose}) {
  return (
    <div className='filterfix' style={{ padding: '30px',width:"350px",height:"600px" }}>
      <div className='popfil'>
      <h2>Filter Tasks</h2>
      <CloseIcon onClick={onClose}></CloseIcon>
      </div>
      
      <form>
        <div className='filtersegone'>
        <label className='filterlabel'>Project</label>
        <TextField  className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Milestone</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Assigned To</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Due Date</label>
        <div className='twoinput'>
        <TextField  label="start" className='filtertextfield1' size="small"/>
        <TextField label="end"  className='filtertextfield1' size="small"/></div>
        </div>

        <div className='filtersegone'>
        <label className='filterlabel'>Date Ended</label>
        <div className='twoinput'>
        <TextField label="start"  className='filtertextfield1' size="small"/>
        <TextField label="end"  className='filtertextfield1' size="small"/></div>
        </div>

        <div className='filtersegone'>
        <label className='filterlabel'>Tags</label>
        <TextField  className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Priority</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Status</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Show</label>
        <TextField  className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Comments</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Image Quality</label>
        <TextField   className='filtertextfield' size="small"/></div>

        <div className='filtersegone'>
        <label className='filterlabel'>Word Count</label>
        <TextField   className='filtertextfield' size="small"/></div>

        
        
        <div className='filtertaskbtn'>
        <Button type="submit" variant='outlined' color="primary">
          Restart
        </Button>
        <Button type="submit" variant="contained" color="error">
          Apply Filter
        </Button>
        </div>
      </form>
    </div>
  );
}

export default PopupFilter;
