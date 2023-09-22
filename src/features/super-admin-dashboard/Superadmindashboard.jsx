import React from 'react';
import ActionAreaCard from "./ActionAreaCard"

import CardData from './CardData';
import "./Superadmindashboard.css";
import Bars1 from './Bars1';
import Bars2 from './Bars2';
import Tabs from './Tabs';


const Superadmindashboard = () => {
  return (
    <div className='dashboardcontent'>
    <div className='superadmindashboard-card'>
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

export default Superadmindashboard