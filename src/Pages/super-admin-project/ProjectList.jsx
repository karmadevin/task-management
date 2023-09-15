import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar,LinearProgress, } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import IosShareIcon from '@mui/icons-material/IosShare';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import "./ProjectList.css";
const data = [
    { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 10,Status:"Pending",
    avatars: [
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 30,Status:"Completed",
    avatars: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 60,Status:"In-Progress",
    avatars: [
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 90,Status:"Completed",
    avatars: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 55,Status:"In-Progress",
    avatars: [
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 38,Status:"Pending",
    avatars: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU',
        'https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg',
        'https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg',
      ], },
      { id: 1, Title: 'Mobile Banking App', Client: 'House& Home', DueDate: "13-9-2023",progress: 95,Status:"Completed",
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
    return (
        <TableContainer component={Paper}>
          <Table className='table'>
            <TableHead className='thead'>
              <TableRow className='thead1'>
              <Checkbox className='theadcheckbox' {...label} />
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow className='tablerow' key={index}>
                    <Checkbox className='Checkbox' {...label} />
                    <TableCell className='id'>{row.id}</TableCell>
                  <TableCell className='titlecontent'>{row.Title}</TableCell>
                  <TableCell className='clientcontent'>{row.Client}</TableCell>
                  <TableCell className='datecontent'>{row.DueDate}</TableCell>
                  <TableCell className='colorbarcontent'>
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
                  <TableCell className='pic'>
                    {row.avatars.map((avatar, avatarIndex) => (
                      <Avatar key={avatarIndex} alt={`Avatar ${avatarIndex + 1}`} src={avatar} />
                    ))}
                  </TableCell>
                  <TableCell className='statuscontent'><span style={{ color: getColorForStatus(row.Status) }}>{row.Status}</span></TableCell>
                  <TableCell className='iconscontent'>

                  <EditNoteIcon className="icons" color="success" />
                  <IosShareIcon className="icons" color="secondary"/>
                  <Person2OutlinedIcon className="icons" color="default"/>
                  <DeleteOutlineOutlinedIcon className="icons" color='error'/>
                  <MoreHorizOutlinedIcon className="icons" color="default"/>

                  </TableCell>
                  
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };






export default ProjectList