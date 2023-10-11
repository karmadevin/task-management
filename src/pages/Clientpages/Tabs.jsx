import React, { useState } from 'react';

import "./Tabs1.css";

import ProjectHeading from '../SprAdminProjectOver/ProjectHeading';
import Details from '../SprAdminProjectOver/Details';
import Leftcon from './Leftcon';
import ClientOverview from './ClientOverview';
import OverviewHead from './OverviewHead';
import ClientDetails from './ClientDetails';
import ClientUser from './ClientUser';
import ClientUserHeading from './ClientUserHeading';
import ClientProject from './ClientProject';
import ClientProHead from './ClientProHead';
import Fhead from './Fhead';





function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Timeline',
      component: <ClientOverview/>,
    component2:<OverviewHead/>},
    {
      label: 'Details',
      component: <ClientDetails/>,
      component2:<ProjectHeading/>
    },
    {
      label: 'Users',
      component: <ClientUser/>,
    component2:<ClientUserHeading/>},
    {
      label: 'Projects',
      component: <ClientProject/>,
      component2:<ClientProHead/>
    },
    {
      label: 'Files',
      component: <ClientProject/>,
      component2:<Fhead/>
  },
    {
      label: 'Financial',
      component: <ClientProject/>,
      component2:<Fhead/>
    },
    
    
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>


    <div className='overalltabs'>
      {tabs[activeTab].component2
       }
       </div>
<div className='clientcontainer'>
<Leftcon className='left1'/>
       <div className='right'>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].component
       }
      </div>
      </div>
      </div>
    

    </div>
  );
}

export default Tabs;
