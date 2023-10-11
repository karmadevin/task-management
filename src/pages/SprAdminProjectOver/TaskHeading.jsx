// import React from 'react';
import "./TaskHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupForm from '../SubPage/PopupForm';
import PopupFilter from "../SubPage/PopupFilter";

const TaskHeading = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const [Filter, setFilter] = useState(false);
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFilterClick = (event) => {
    setFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilter(null);
  };

  const handleClosePopup = () => {
    setFilter(false);
  };
  const handleClosePopup1 = () => {
    setAnchorEl(false);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const openfilter = Boolean(Filter);
  const idd = openfilter ? 'simple-popover' : undefined;
    return (
        <div className='TaskHeading-heading'>
            <div className='TaskHeading-head-content1'>
                <h2>Task Management</h2>
                <Box className="TaskHeading-box">
                    <Breadcrumbs className='TaskHeading-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Typography className='TaskHeading-typography'>#57</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='TaskHeading-head-content2'>
            
                <div className='TaskHeading-profileIcon'><Person2OutlinedIcon/></div>
                <div className='TaskHeading-profileIcon' onClick={handleFilterClick}><FilterAltOutlinedIcon/></div>
                
                {/* <button className='addtask'></button> */}
                <Button aria-describedby={id} variant="contained" onClick={handleClick} className='addtask'>
                + Add Task
      </Button> 
                <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopupForm onClose={handleClosePopup1}/>
      </Popover>
      
      <Popover
        id={idd}
        open={openfilter}
        Filter={Filter}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopupFilter onClose={handleClosePopup} />
      </Popover>
                
                
            </div>
            <div></div>
        </div>
    )
}

export default TaskHeading