import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar,LinearProgress, TablePagination, } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IosShareIcon from '@mui/icons-material/IosShare';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import "./ProjectList.css";
const data = [
    { id: "INV-00010", Title: '01.01.2023', Client: '$10.000', DueDate: "$0.000",progress: 10,Status:"Overdue",
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

const ProjectList = () => {

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
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, index) => (
                <TableRow className='financial-tablerow' key={index}>
                    <Checkbox className='financial-Checkbox' {...label} />
                    <TableCell className='financial-id'>{row.id}</TableCell>
                  <TableCell className='financial-titlecontent'>{row.Title}</TableCell>
                  <TableCell className='financial-clientcontent'>{row.Client}</TableCell>
                  <TableCell className='financial-datecontent'>{row.DueDate}</TableCell>
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
                  <TableCell className='financial-statuscontent'><span style={{ color: getColorForStatus(row.Status) }}>{row.Status}</span></TableCell>
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






export default ProjectList