import React from 'react';
import "./ProjectHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const ProjectHeading = () => {
    return (
        <div className='heading'>
            <div className='head-content1'>
                <h4>Project</h4>
                <Box className="box">
                    <Breadcrumbs className='breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">SUPER ADMIN</Link>
                        <Typography className='typography'>PROJECTS</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='head-content2'>
                <div className='search'>
                    <div className='searchIcon'><SearchIcon/></div>
                    <input type='text' placeholder='search'/>
                </div>
                <div className='profileIcon'><Person2OutlinedIcon/></div>
                <div className='profileIcon'><FilterAltOutlinedIcon/></div>
                <Button className='addproject'>+ Add Project</Button>
            </div>
            <div></div>
        </div>
    )
}

export default ProjectHeading