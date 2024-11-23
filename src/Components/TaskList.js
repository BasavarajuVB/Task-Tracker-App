

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskList = ({ 
  tasks, 
  onEditTask, 
  onDeleteTask 
}) => {
  const sortedTasks = tasks.sort((a, b) => 
    new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="task-list-container">
      {sortedTasks.length === 0 ? (
        <p className="no-tasks">No tasks found</p>
      ) : (
        <div className="task-grid">
          {sortedTasks.map((task) => (
            <div 
              key={task.id} 
              className={`task-card task-${task.status}`}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-meta">
                <span>Due: {task.dueDate}</span>
                <span className="task-status">{task.status}</span>
              </div>
              <div className="task-actions">
                <button 
                  onClick={() => onEditTask(task)}
                  className="btn-edit"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => onDeleteTask(task.id)}
                  className="btn-delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;