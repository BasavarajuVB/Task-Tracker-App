
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Navbar = ({ 
  currentFilter, 
  setCurrentFilter, 
  dueDateFilter, 
  setDueDateFilter 
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Task Tracker</h1>
      </div>
      <div className="filter-container">
        <div className="status-filters">
          <button 
            className={`filter-btn all ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn pending ${currentFilter === 'pending' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-btn in-progress ${currentFilter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('in-progress')}
          >
            In Progress
          </button>
          <button 
            className={`filter-btn completed ${currentFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setCurrentFilter('completed')}
          >
            Completed
          </button>
        </div>
        <div className="date-filter">
          <FaCalendarAlt className="calendar-icon" />
          <select 
            value={dueDateFilter} 
            onChange={(e) => setDueDateFilter(e.target.value)}
            className="date-select"
          >
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;