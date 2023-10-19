import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import "./FinancialHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import PopupInvoice from '../SubPage/PopupInvoice';

const FinancialHeading = () => {

    const [anchorEl, setAnchorEl] = useState(false);
    
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClosePopup = () => {
    setAnchorEl(false);
  };
  
    return (
        <div className='Financial-heading'>
            <div className='Financial-head-content1'>
                <h2>Task Management</h2>
                <Box className="Financial-box">
                    <Breadcrumbs className='Financial-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Typography className='Financial-typography'>#57</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='Financial-head-content2'>
            
                {/* <div className='Financial-profileIcon'><Person2OutlinedIcon/></div>
                <div className='Financial-profileIcon'><FilterAltOutlinedIcon/></div> */}
                
                <button className='addtask' onClick={handleClick}>+ Add Invoice</button>
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
        <PopupInvoice onClose={handleClosePopup}/>
      </Popover>
                
                
            </div>
            <div></div>
        </div>
    )
}

export default FinancialHeading