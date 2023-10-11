import React from 'react';
import"./More.css";
import CardData from './CardData';
import ProjectCard from './ActionAreaCard';
import { Typography } from '@mui/material';
import ProjectHeading from './ProjectHeading';
import ProjectList from './ProjectList';
import MoreData from './MoreData';
import MoreList from './MoreList';

const More = () => {
  return (
    <div className='More-More'>
      
    <div className='More-project'>
        {MoreData.map(data=>(
          <ProjectCard
          count={data.count}
          status={data.status}
          color={data.color}
          />
        ))}
    </div>
    <MoreList/>
    </div>
  )
}

export default More