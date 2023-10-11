import React from 'react';
import "./ClientProHead.css"
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
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import IconButton from '@mui/material/IconButton';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const ClientProHead = () => {
    return (
        <div className='ClientProHead-heading'>
            <div className='ClientProHead-head-content1'>
                <h2>Client - asdasd</h2>
                <Box className="ClientProHead-box">
                    <Breadcrumbs className='ClientProHead-breadcrumbs' aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">APP</Link>
                        <Link underline='hover' color="rgb(159, 165, 165)" href="#">CLIENTS</Link>
                        {/* <Typography className='ClientProHead-typography'>#57</Typography> */}
                    </Breadcrumbs>
                </Box>
            </div>
            <div className='ClientProHead-head-content2'>
            
                {/* <div className='ClientProHead-profileIcon' ><AccessAlarmsOutlinedIcon style={{ color: "red" }}/></div> */}
                <div className='ClientProHead-profileIconsearch'><SearchIcon/> <span>Search</span></div>
                <div className='ClientProHead-profileIcon' ><AccountBoxOutlinedIcon /></div>
                <div className='ClientProHead-profileIcon' ><FilterAltOutlinedIcon /></div>
                
                <div  className='ClientProHead-profileIcon1'><AddCircleOutlinedIcon   style={{ color: "red"}}></AddCircleOutlinedIcon></div>
                
                
            </div>
            <div></div>
        </div>
    )
}

export default ClientProHead