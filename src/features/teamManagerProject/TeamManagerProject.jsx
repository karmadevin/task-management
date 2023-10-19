import React from 'react';
import"./TeamManagerProject.css";
import CardData from './CardData';
import ProjectCard from './ActionAreaCard';
import { Typography } from '@mui/material';
import ProjectHeading from './ProjectHeading';
import ProjectList from './ProjectList';

const TeamManagerProject = () => {
  return (
    <div className='TeamManagerProject-TeamManagerProjects'>
      <ProjectHeading/>
    <div className='TeamManagerProject-project'>
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

export default TeamManagerProject