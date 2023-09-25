import React from 'react';
import "./TaskHeading.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import SearchIcon from '@mui/icons-material/Search';
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const TaskHeading = () => {
    return (
        <div className='TeamManagerTask-heading'>
            <div className='TeamManagerTask-head-content1'>
                <h2>Tasks</h2>
                <Box className="TeamManagerTask-box">
                    <Breadcrumbs className='TeamManagerTask-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">TEAM MANAGER</Link>
                        <Typography className='TeamManagerTask-typography'>TASKS</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
        </div>
    )
}

export default TaskHeading