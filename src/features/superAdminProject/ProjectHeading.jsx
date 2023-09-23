import React from 'react';
import "./ProjectHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const ProjectHeading = () => {
    return (
        <div className='superadminproject-heading'>
            <div className='superadminproject-head-content1'>
                <h2>Project</h2>
                <Box className="superadminproject-box">
                    <Breadcrumbs className='superadminproject-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Typography className='superadminproject-typography'>PROJECTS</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='superadminproject-head-content2'>
                <div className='superadminproject-search'>
                    <div className='superadminproject-searchIcon'><SearchIcon/></div>
                    <input type='text' placeholder='search'/>
                </div>
                <div className='superadminproject-profileIcon'><Person2OutlinedIcon/></div>
                <div className='superadminproject-profileIcon'><FilterAltOutlinedIcon/></div>
                <Button className='superadminproject-addproject'>+ Add Project</Button>
            </div>
            <div></div>
        </div>
    )
}

export default ProjectHeading