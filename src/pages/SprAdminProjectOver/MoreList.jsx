import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar,LinearProgress, TablePagination, } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IosShareIcon from '@mui/icons-material/IosShare';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import "./MoreList.css";
const data = [
    { id: "27", Subject: 'New Content', Client: 'Malvo', Date: "01.01.2023",Priority: "Overdue",Activity:"",Status:"Overdue",Action:"Overdue",
    avatars: [
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
      ], }, 
    
      
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

const MoreList = () => {

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
          <Table className='more-table'>
            <TableHead className='more-thead'>
              <TableRow className='more-thead1'>
              {/* <Checkbox className='more-theadcheckbox' {...label} /> */}
                <TableCell>ID</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Activity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, index) => (
                <TableRow className='more-tablerow' key={index}>
                    {/* <Checkbox className='more-Checkbox' {...label} /> */}
                    <TableCell className='more-id'>{row.id}</TableCell>
                  <TableCell className='more-titlecontent'>{row.Subject}</TableCell>
                  <TableCell className='more-clientcontent'>{row.Client}</TableCell>
                  <TableCell className='more-datecontent'>{row.Date}</TableCell>
                  <TableCell className='more-statuscontent'><span style={{ color: getColorForStatus(row.Status) }}>{row.Priority}</span></TableCell>
                  <TableCell className='more-datecontent'>{row.Activity}</TableCell>
                 
                  {/* <TableCell className='more-colorbarcontent'>
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
                  <TableCell className='more-pic'>
                    {row.avatars.map((avatar, avatarIndex) => (
                      <Avatar key={avatarIndex} alt={`Avatar ${avatarIndex + 1}`} src={avatar} />
                    ))}
                  </TableCell> */}
                  <TableCell className='more-statuscontent'><span style={{ color: getColorForStatus(row.Status) }}>{row.Status}</span></TableCell>
                  <TableCell className='more-iconscontent'>
                  <DeleteOutlineOutlinedIcon className="more-icons" color='error' ></DeleteOutlineOutlinedIcon>
                  <EditNoteIcon className="more-icons" color="success"  />
                  <IosShareIcon className="more-icons" color="secondary"/>
                  {/* <Person2OutlinedIcon className="more-icons" color="default"/> */}
                  
                  {/* <MoreHorizOutlinedIcon className="more-icons" color="default"/> */}

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






export default MoreList