
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ 
  isOpen, 
  onClose, 
  onAddTask, 
  taskToEdit, 
  onUpdateTask 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setStatus(taskToEdit.status);
    } else {
      resetForm();
    }
  }, [taskToEdit, isOpen]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('pending');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) return;

    const taskData = {
      id: taskToEdit ? taskToEdit.id : uuidv4(),
      title: title.trim(),
      description: description.trim(),
      dueDate,
      status,
      createdAt: taskToEdit ? taskToEdit.createdAt : new Date().toISOString()
    };

    if (taskToEdit) {
      onUpdateTask(taskData);
    } else {
      onAddTask(taskData);
    }

    onClose();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </button>
        <button 
          type="button" 
          className="btn-cancel" 
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;