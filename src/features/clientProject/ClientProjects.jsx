// import React from 'react';
import "./Clientprojects.css";
import CardData from "./CardData";
import ProjectCard from "./ActionAreaCard";
// import { Typography } from '@mui/material';
import ProjectHeading from "./ProjectHeading";
import ProjectList from "./ProjectList";

const ClientProjects = () => {
  return (
    <div className="superadminproject-superadminprojects">
      <ProjectHeading />
      <div className="superadminproject-project">
        {CardData.map((data, index) => (
          <ProjectCard
            key={index}
            count={data.count}
            status={data.status}
            color={data.color}
          />
        ))}
      </div>
      <ProjectList />
    </div>
  );
};

export default ClientProjects;
