import React from 'react';
import "./ProjectHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ProjectHeading = () => {
    return (
        <div className='SprAdminProjectOver-heading'>
            <div className='SprAdminProjectOver-head-content1'>
                <h2>Task Management</h2>
                <Box className="SprAdminProjectOver-box">
                    <Breadcrumbs className='SprAdminProjectOver-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">PROJECTS</Link>
                        <Typography className='SprAdminProjectOver-typography'>#57</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='SprAdminProjectOver-head-content2'>
            
                <div className='SprAdminProjectOver-profileIcon'><Person2OutlinedIcon/></div>
                <div className='SprAdminProjectOver-profileIcon'><BorderColorOutlinedIcon/></div>
                <div className='SprAdminProjectOver-profileIcon'><ContentCopyOutlinedIcon/></div>
                <div className='SprAdminProjectOver-profileIcon'><DeleteOutlinedIcon/></div>
                
            </div>
            <div></div>
        </div>
    )
}

export default ProjectHeading