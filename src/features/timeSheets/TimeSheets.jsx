import React from 'react'
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import './TimeSheets.css'
import fliter from '../../assets/fliter.svg'
import ToggleButton from '@mui/material/ToggleButton';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import edittime from '../../assets/edittime.svg'
import pausecircle from "../../assets/pausecircle.svg"
import restart from "../../assets/restart.svg"
import binsvgrep from "../../assets/binsvgrep.svg"
import Arrowpayslip from"../../assets/Arrowpayslip.svg"
function TimeSheets() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <img src={pausecircle} alt="pass" />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <img src={edittime} alt="edit" />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <img src={restart} alt="restart" />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
<img src={binsvgrep} alt="bin" />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (

    <>
      <div className="heading">
        <div className="head-content1">
          <h4>Time Sheets</h4>
          <Box className="box">
            <Breadcrumbs
              className="breadcrumbs"
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />} sx={{ display: 'flex' }} >
              <Link underline="hover" color="rgb(159, 165, 165)" href="#">
                DEVELOPER
              </Link>
              <Typography className="typography">Time Sheets</Typography>
            </Breadcrumbs>
          </Box>
        </div>
        <div className="head-content2">
          <div className='time-button-group'><div className="search">
            <div className="searchIcon">
              <SearchIcon />

            </div>
            <input type="text" placeholder="search" />
          </div>
            <div className="Time-filter">
              <img src={fliter} alt="filter" />
            </div>
            <Button className="add-time-record"> + Add Time Record</Button></div>
        </div>
      </div>
      <div className='time-head-content'>
      <Checkbox />
      <p className='Time-user-head-content'>User</p>
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-task-head-content'>Task</p>  
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-project-head-content'>Project</p>
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-date-head-content'>Date</p>  
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-invoiced-head-content'>NotInvoiced</p>
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-time-head-content'>Time</p>
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        <p className='Time-action-head-content'>Action</p>
        <img src={Arrowpayslip} alt="Arrow" className='time-arrow'/>
        
      </div>

        <div className='time-body-content'>
        <Checkbox />
        <div className='Time-avatar-content'><Avatar sx={{ height: '25px', width: '25px' }} /></div>
        <p className='Time-name-content'>Rajesh</p>
        <p className='Time-Task-content'>application</p>
        <p className='Time-project-content'>project</p>
        <p className='Time-date-content'>date</p>
        <p className='Time-invoiced-content'>NotInvoiced</p>
        <p className='Time-time-content'>time</p>
        <Stack spacing={2} alignItems="center" className='time-btn-content'>
          <ToggleButtonGroup {...control} aria-label="Medium sizes">{children}</ToggleButtonGroup>
        </Stack>
      </div>
      <div className='time-body-content'>
        <Checkbox />
        <div className='Time-avatar-content'><Avatar sx={{ height: '25px', width: '25px' }} /></div>
        <p className='Time-name-content'>Rajesh</p>
        <p className='Time-Task-content'>application</p>
        <p className='Time-project-content'>project</p>
        <p className='Time-date-content'>date</p>
        <p className='Time-invoiced-content'>NotInvoiced</p>
        <p className='Time-time-content'>time</p>
        <Stack spacing={2} alignItems="center" className='time-btn-content'>
          <ToggleButtonGroup {...control} aria-label="Medium sizes ">{children}</ToggleButtonGroup>
        </Stack>
      </div>
    </>
  )
}

export default TimeSheets