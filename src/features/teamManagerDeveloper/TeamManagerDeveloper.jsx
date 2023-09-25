import React from "react";
import "./TeamManagerDeveloper.css";
import DeveloperHeader from "./DeveloperHeader";
import DeveloperList from "./DeveloperList";


const TeamManagerDeveloper = () => {
  return (
    <div className="TeamManagerDeveloper">
      <DeveloperHeader/>
      <DeveloperList/>
    </div>
  );
};

export default TeamManagerDeveloper;
