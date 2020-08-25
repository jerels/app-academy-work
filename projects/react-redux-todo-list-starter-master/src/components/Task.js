import React from 'react';

// TODO: Take in `deleteTask` method and `task` object as props
const Task = ({ deleteTask, task }) => {
  const handleClick = () => {
    deleteTask(task.id);
  }

  return (
    <li>
      <h1>{task.message}</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
