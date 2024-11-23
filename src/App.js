
// App.js
import React, { useState, useEffect, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';

// Components
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import Modal from './Components/Modal';

// Utilities
import { loadTasks, saveTasks } from './utils/localStorage';

// Styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [currentFilter, setCurrentFilter] = useState('all');
  const [dueDateFilter, setDueDateFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (tasks.length >= 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  const filterTasksByDate = (tasks, dateFilter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const weekLater = new Date(today);
    weekLater.setDate(weekLater.getDate() + 7);
    
    const monthLater = new Date(today);
    monthLater.setMonth(monthLater.getMonth() + 1);

    return tasks.filter(task => {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      switch (dateFilter) {
        case 'today':
          return dueDate.getTime() === today.getTime();
        case 'week':
          return dueDate >= today && dueDate <= weekLater;
        case 'month':
          return dueDate >= today && dueDate <= monthLater;
        case 'overdue':
          return dueDate < today;
        default:
          return true;
      }
    });
  };

  // Combined filtering for status and due date
  const filteredTasks = useMemo(() => {
    let filtered = tasks;
    
    // First filter by status
    if (currentFilter !== 'all') {
      filtered = filtered.filter(task => task.status === currentFilter);
    }
    
    // Then filter by due date
    filtered = filterTasksByDate(filtered, dueDateFilter);
    
    // Sort by due date
    return filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }, [tasks, currentFilter, dueDateFilter]);

  const openAddModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success('Task Added Successfully!');
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    toast.info('Task Updated Successfully!');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast.error('Task Deleted Successfully!');
  };

  return (
    <div className="app">
      <Navbar
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        dueDateFilter={dueDateFilter}
        setDueDateFilter={setDueDateFilter}
      />
      <div className="app-content">
        <button
          className="btn-add-task"
          onClick={openAddModal}
        >
          <FaPlus /> Add New Task
        </button>

        <TaskList
          tasks={filteredTasks}
          onEditTask={openEditModal}
          onDeleteTask={handleDeleteTask}
        />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TaskForm
            isOpen={isModalOpen}
            onClose={closeModal}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            taskToEdit={editingTask}
          />
        </Modal>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;