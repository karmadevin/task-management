import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar,LinearProgress, TablePagination, } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IosShareIcon from '@mui/icons-material/IosShare';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import "./ClientUser.css";
const data = [
    { Name: "Alexander", Email: 'alexander@yahoo.com', Phone: '+31 23568978'
     }, 
    
      
];

function getColorForStatus(status) {
  switch (status) {
    case 'Completed':
      return 'green';
    case 'In-Progress':
      return 'orange';
    case 'Pending':
      return 'red';
    default:
      return 'black';
  }
}

const ClientUser = () => {

  const handlechangepage=(event,newpage)=>{
    pagechange(newpage)
  }
  const handleRowsPerPage=(event)=>{
    rowperpageChange(+event.target.value)
    pagechange(0)
  }

const[page,pagechange] = useState(0);
const[rowperpage,rowperpageChange] = useState(5);
 
    return (
      <div>
        <TableContainer component={Paper}>
          <Table className='financial-table'>
            <TableHead className='financial-thead'>
              <TableRow className='financial-thead1'>
              <Checkbox className='financial-theadcheckbox' {...label} />
                <TableCell className='TableCell'>Name</TableCell>
                <TableCell className='TableCell'>Email</TableCell>
                <TableCell className='TableCell'>Phone</TableCell>
                
                <TableCell className='TableCell'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, index) => (
                <TableRow className='financial-tablerow' key={index}>
                    <Checkbox className='financial-Checkbox' {...label} />
                    <TableCell className='financial-id'>{row.Name}</TableCell>
                  <TableCell className='financial-titlecontent'>{row.Email}</TableCell>
                  <TableCell className='financial-clientcontent'>{row.Phone}</TableCell>
                 
                  {/* <TableCell className='financial-colorbarcontent'>
                  <LinearProgress
                  variant="determinate"
                  value={row.progress}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    '&.MuiLinearProgress-colorPrimary': {
                      backgroundColor: 'lightgray',
                    },
                    '& .MuiLinearProgress-bar': {
                      backgroundColor:
                        row.progress < 50 ? 'red' : 'green', // Customize the progress bar color based on the progress value
                    },
                  }}
                />
                </TableCell>
                  <TableCell className='financial-pic'>
                    {row.avatars.map((avatar, avatarIndex) => (
                      <Avatar key={avatarIndex} alt={`Avatar ${avatarIndex + 1}`} src={avatar} />
                    ))}
                  </TableCell> */}
                  
                  <TableCell className='financial-iconscontent'>
                  <DeleteOutlineOutlinedIcon className="financial-icons" color='error' ></DeleteOutlineOutlinedIcon>
                  <EditNoteIcon className="financial-icons" color="success"  />
                  <IosShareIcon className="financial-icons" color="secondary"/>
                  {/* <Person2OutlinedIcon className="financial-icons" color="default"/> */}
                  
                  <MoreHorizOutlinedIcon className="financial-icons" color="default"/>

                  </TableCell>
                  
                </TableRow>
                
              ))}
            </TableBody>
          </Table>

          
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[5,10,25]}
        rowsPerPage={rowperpage}
        page={page}
        count={data.length}
        component="div"
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
        >

        </TablePagination>

        </div>
      );
    };






export default ClientUser