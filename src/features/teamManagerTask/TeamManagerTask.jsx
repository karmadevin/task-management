import React from 'react'
import TaskHeading from './TaskHeading'
import ActionAreaCard from './ActionAreaCard'
import CardData from './CardData';
import "./TeamManagerTask.css"
import DragAndDrop from './DragAndDrop';

const TeamManagerTask = () => {
  return (
    <div className='TeamManagerTask-TeamManagerTask'>
        <TaskHeading/>
        <div className='TeamManagerTask-task'>
        {CardData.map ((data)=>(
            <ActionAreaCard
            count={data.count}
            status={data.status}
            color={data.color}

            />
        ))}
        </div>
        <DragAndDrop/>
    </div>
  )
}

export default TeamManagerTask