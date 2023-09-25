import React from 'react';
import "./ProjectHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const ProjectHeading = () => {
    return (
        <div className='TeamManagerProject-heading'>
            <div className='TeamManagerProject-head-content1'>
                <h2>Project</h2>
                <Box className="TeamManagerProject-box">
                    <Breadcrumbs className='TeamManagerProject-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">TEAM MANAGER</Link>
                        <Typography className='TeamManagerProject-typography'>PROJECTS</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='TeamManagerProject-head-content2'>
                <div className='TeamManagerProject-search'>
                    <div className='TeamManagerProject-searchIcon'><SearchIcon/></div>
                    <input type='text' placeholder='search'/>
                </div>
                <div className='TeamManagerProject-profileIcon'><Person2OutlinedIcon/></div>
                <div className='TeamManagerProject-profileIcon'><FilterAltOutlinedIcon/></div>
                <Button className='TeamManagerProject-addproject'>+ Add Project</Button>
            </div>
            <div></div>
        </div>
    )
}

export default ProjectHeading