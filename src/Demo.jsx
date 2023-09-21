import React, { useState } from 'react';
import './App.css';

const Demo = () => {
  const [tasks, setTasks] = useState([
    { id: 'task-1', content: 'Task 1' },
    { id: 'task-2', content: 'Task 2' },
    { id: 'task-3', content: 'Task 3' },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text/plain');
    
    // Find the source and target tasks by their IDs
    const sourceTask = tasks.find(task => task.id === sourceId);
    const targetTask = tasks.find(task => task.id === targetId);

    // Determine the source and target task indices
    const sourceIndex = tasks.indexOf(sourceTask);
    const targetIndex = tasks.indexOf(targetTask);

    // Create a new array with the tasks reordered
    const updatedTasks = [...tasks];
    updatedTasks.splice(sourceIndex, 1);
    updatedTasks.splice(targetIndex, 0, sourceTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, task.id)}
          >
            {task.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;

