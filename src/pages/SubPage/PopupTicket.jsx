import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PopupTicket.css";
import { Switch } from '@mui/material';


import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CloseIcon from '@mui/icons-material/Close';

function PopupForm({onClose}) {
  return (
    <div className='tic-fix' style={{ padding: '10px 10px',width:"1280px" }}>
      <div className='moreh'>
      <div className='TaskHeading-head-content1'>
                <h2>Tickets</h2>
                <Box className="TaskHeading-box">
                    <Breadcrumbs className='TaskHeading-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">TICKETS</Link>
                        <Typography className='TaskHeading-typography'>CREATE NEW TICKETS</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <CloseIcon onClick={onClose}></CloseIcon>
            </div>
      <form className='ticdiv'>
        
        <div className='thirty'>
<div className='Ticket-Options'>Ticket Options</div>
        <div className='tic-segthree'>
        <label className='tic-labelthree'>Client</label>
        <TextField className='tic-textfieldthree' size="small"/></div>

        <div className='tic-segthree'>
        <label className='tic-labelthree'>Project</label>
        <TextField className='tic-textfieldthree' size="small"/></div>

        <div className='tic-segthree'>
        <label className='tic-labelthree'>Department</label>
        <TextField className='tic-textfieldthree' size="small"/></div>

        <div className='tic-segthree'>
        <label className='tic-labelthree'>Priority</label>
        <TextField placeholder='Normal' className='tic-textfieldthree' size="small"/></div>
<div className='line'></div>
        <div className='tic-segthree'>
        <label className='tic-labelthree'>Ticket Custom Text</label>
        <TextField className='tic-textfieldthree' size="small"/></div>

        </div >
        <div className='seventy'>
        <TextField className='tic-textfieldfour' size="small"/>

        <TextareaAutosize
        className='tic-textarea'
        minRows={20} // Adjust as needed
        aria-label="textarea"
      />
      <div className='logoss'>
          <FolderOpenIcon/>
          <div>Attachment</div>
          <ControlPointIcon/>
          <AttachmentIcon/>
        </div>
        <div className='drag'></div>
        
        
        
        </div>
      </form>
    </div>
  );
}

export default PopupForm;
