import React from 'react';
import"./Superadminprojects.css";
import CardData from './CardData';
import ProjectCard from './ActionAreaCard';
import { Typography } from '@mui/material';
import ProjectHeading from './ProjectHeading';
import ProjectList from './ProjectList';

const Superadminprojects = () => {
  return (
    <div className='superadminprojects'>
      <ProjectHeading/>
    <div className='project'>
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

export default Superadminprojects