import React from 'react';
import "./MileHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const MileHeading = () => {
    return (
        <div className='Mile-heading'>
            <div className='Mile-head-content1'>
                <h2>Task Management</h2>
                <Box className="Mile-box">
                    <Breadcrumbs className='Mile-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Typography className='Mile-typography'>#57</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='Mile-head-content2'>
            
                {/* <div className='Mile-profileIcon'><Person2OutlinedIcon/></div>
                <div className='Mile-profileIcon'><FilterAltOutlinedIcon/></div> */}
                
                <button className='addtask'>+ Add Milestone</button>
                
                
            </div>
            <div></div>
        </div>
    )
}

export default MileHeading