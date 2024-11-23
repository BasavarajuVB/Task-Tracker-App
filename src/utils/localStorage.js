// export const loadTasksFromStorage = () => {
//     const storedTasks = localStorage.getItem('tasks');
//     return storedTasks ? JSON.parse(storedTasks) : null;
//   };
  
//   export const saveTasksToStorage = (tasks) => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   };

// utils/localStorage.js

// const STORAGE_KEY = 'taskManager_tasks';


const STORAGE_KEY = 'taskManager_tasks';
const VERSION = '1.0';

export const loadTasks = () => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (!storedData) return [];

    const { version, tasks } = JSON.parse(storedData);
    
    // Version check
    if (version !== VERSION) {
      console.warn('Data version mismatch, might need migration');
    }

    // Validate data structure
    if (!Array.isArray(tasks)) {
      console.error('Stored tasks is not an array');
      return [];
    }

    return tasks;
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    const data = {
      version: VERSION,
      tasks,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
    // Could implement a backup strategy here
  }
};