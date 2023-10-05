import React, { useState } from 'react';
import { Avatar} from '@mui/material';
import "./Tabs.css";
import Demo from './Overview';
import Demo1 from './Bar';
import Overview from './Overview';
import Details from './Details';
import ProjectHeading from './ProjectHeading';
import TaskHeading from './TaskHeading';
import Dnd from './Dnd';
import MileHeading from './MileHeading';
import Milestone from './Milestone';
import FinancialHeading from './FinancialHeading';
import Financial from './Financial';
import MoreHeading from './MoreHeading';
import More from './More';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Overview',
      component: <Overview/>,
    component2:<ProjectHeading/>},
    {
      label: 'Details',
      component: <Details/>,
      component2:<ProjectHeading/>
    },
    {
      label: 'Task',
      component: <Dnd/>,
      component2:<TaskHeading/>
    },{
      label: 'Milestones',
      component: <Milestone/>,
      component2:<MileHeading/>

    },{
      label: 'Files',
      component: " "
    },{
      label: 'Comments',
      component: " "
    },{
      label: 'Financial',
      component: <Financial/>,
      component2:<FinancialHeading/>
    },{
      label: 'More',
      component: <More/>,
      component2:<MoreHeading/>
    },
    
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='overalltabs'>
      {tabs[activeTab].component2
       }
       
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
  );
}

export default Tabs;
