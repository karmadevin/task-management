import React from 'react';
import ActionAreaCard from "./ActionAreaCard"

import CardData from './CardData';
import "./TeamManagerDashboard.css";
import Bars1 from './Bars1';
import Bars2 from './Bars2';
import Tabs from './Tabs';


const TeamManagerDashboard = () => {
  return (
    <div className='dashboardcontent'>
    <div className='TeamManagerDashboard-card'>
        {CardData.map ((data)=>(
            <ActionAreaCard
            img={data.img}
            title={data.title}
            subtitle={data.subtitle}

            />
        ))}
        </div>
        <div className='bars'>
            <Bars1/>
            <Bars2/>
        </div>
        <Tabs/>
        </div>
  )
}

export default TeamManagerDashboard