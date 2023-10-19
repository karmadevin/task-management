import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import "./MoreHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PopupTicket from '../SubPage/PopupTicket';
const MoreHeading = () => {

    const [anchorEl, setAnchorEl] = useState(false);
    
    const handleClosePopup = () => {
      setAnchorEl(false);
    };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return (
        <div className='More-heading'>
            <div className='More-head-content1'>
                <h2>Task Management</h2>
                <Box className="More-box">
                    <Breadcrumbs className='More-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Typography className='More-typography'>#57</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='More-head-content2'>
            
                {/* <div className='More-profileIcon'><Person2OutlinedIcon/></div>
                <div className='More-profileIcon'><FilterAltOutlinedIcon/></div> */}
                
                <button className='addtask' onClick={handleClick}>+ Add Ticket</button>
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
        <PopupTicket onClose={handleClosePopup}/>
      </Popover>
                
            </div>
            <div></div>
        </div>
    )
}

export default MoreHeading