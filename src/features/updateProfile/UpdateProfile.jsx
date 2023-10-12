import React from 'react'
import Xicon from '../../assets/Xicon.svg'
import './updateProfile.css'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#9e9e9e' : '#bdbdbd',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
function UpdateProfile() {
  return (
    <div className='updateprofile-frmbox'>
      <div className='updateprofile-nav'><h3>
        Update My Profile
      </h3><img src={Xicon} alt="X" className='updateprofile-x' /></div>
      <div className='updateprofile-frm'>
        <div className='updateprofile-txtinfo'>
          <p>First Name*</p>
          <p>Last Name*</p>
          <p>Email Address*</p>
          <p>Telephone</p>
          <p>position</p>
        </div>
        <div className='updateprofile-txtbox'>
          <input type="text" placeholder='First Name'className='updateprofile-input'/>
          <input type="text" placeholder='Last Name'className='updateprofile-input'/>
          <input type="text" placeholder='Email Address'className='updateprofile-input'/>
          <input type="text" placeholder='Telephone'className='updateprofile-input'/>
          <input type="text" placeholder='position'className='updateprofile-input'/>
        </div>
      </div>
      <div className='updateprofile-btmdiv'><p>
        Social Profile
      </p>
        <FormControlLabel control={<IOSSwitch />} /></div>
      <div className='updateprofile-csbuttons'>
<button className='updateprofile-close'>Close</button>
<button className='updateprofile-submit'>Submit</button>
      </div>
    </div>

  )
}

export default UpdateProfile