import React from 'react';
import "./OverviewHead.css"
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';

const OverviewHead = () => {
    return (
        <div className='OverviewHead-heading'>
            <div className='OverviewHead-head-content1'>
                <h2>Client - asdasd</h2>
                <Box className="OverviewHead-box">
                    <Breadcrumbs className='OverviewHead-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">APP</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">CLIENTS</Link>
                        {/* <Typography className='OverviewHead-typography'>#57</Typography> */}
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='OverviewHead-head-content2'>
            
                <div className='OverviewHead-profileIcon' ><AccessAlarmsOutlinedIcon style={{ color: "red" }}/></div>
                <div className='OverviewHead-profileIcon'><MailOutlineOutlinedIcon style={{ color: "grey" }}/></div>
                <div className='OverviewHead-profileIcon'><BorderColorOutlinedIcon style={{ color: "grey" }}/></div>
                
                <div className='OverviewHead-profileIcon'><DeleteOutlinedIcon style={{ color: "grey" }}/></div>
                
            </div>
            <div></div>
        </div>
    )
}

export default OverviewHead