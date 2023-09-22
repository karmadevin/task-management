import React, { useState } from 'react';
import { Avatar} from '@mui/material';
import "./Tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Tab 1',
      data: [{ id: 1, title: 'Project', name: 'Henry', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design",
      avatars: 'data:image/jpeg;base64,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'},
      { id: 2, title: 'Task', name: 'Isabella', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design" ,
      avatars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHW3Vy1-oeLGeE7xoybQzImGHBOLp2zkekg&usqp=CAU'}
    ],
    },
    {
      label: 'Tab 2',
      data: [{ id: 1, title: 'Project', name: 'Benjamin', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design",
      avatars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJqWUvcYVb97rVSjkZpIbCUKSHnE-didOTw&usqp=CAU'},
      { id: 2, title: 'Task', name: 'Amelia', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design" ,
      avatars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakioHDJRqrTuK1C4y6NDGT-SkiQgUyfH9bA&usqp=CAU'},
      { id: 3, title: 'Project', name: 'Benjamin', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design",
      avatars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJqWUvcYVb97rVSjkZpIbCUKSHnE-didOTw&usqp=CAU'},
      { id: 4, title: 'Task', name: 'Amelia', time:"10 Minutes Ago" , status:"Signed a New Contract", work:"Logo Design" ,
      avatars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakioHDJRqrTuK1C4y6NDGT-SkiQgUyfH9bA&usqp=CAU'}
    ],
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='overalltabs'>
        <h4>Latest Activity</h4>
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
        {tabs[activeTab].data.map((item, index) => (
          <div key={index} className="tab-item">
            
            <Avatar  alt="img" src={item.avatars} />
            <div className='tab-content-text'>
                <h5>{item.name}<span>{item.time}</span></h5>
                <p>{item.status}</p>
                <div>{item.work}</div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
