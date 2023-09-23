import * as React from 'react';
import { CardActionArea } from '@mui/material';
import "./ActionAreaCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function ActionAreaCard(props) {
  return (

    <Card className='actioncard'>
        <IconButton aria-label="add to favorites" className='iconimg'>
        {props.img}
      </IconButton>
      <CardContent className='cardcontent'>
        <Typography variant="h5" component="div" className='icontitle'>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='iconsubtitle'>
          {props.subtitle}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}
