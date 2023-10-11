import React from 'react';
import"./Financial.css";
import CardData from './CardData';
import ProjectCard from './ActionAreaCard';
import { Typography } from '@mui/material';
import ProjectHeading from './ProjectHeading';
import ProjectList from './ProjectList';

const Financial = () => {
  return (
    <div className='Financial-Financial'>
      
    <div className='Financial-project'>
        {CardData.map(data=>(
          <ProjectCard
          count={data.count}
          status={data.status}
          color={data.color}
          />
        ))}
    </div>
    <ProjectList/>
    </div>
  )
}

export default Financial