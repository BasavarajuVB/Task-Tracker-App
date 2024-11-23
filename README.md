# Task Tracker Application

## Overview
The **Task Tracker Application** is a React-based project designed to help users manage tasks efficiently. It provides features like task creation, editing, deletion, and filtering based on status and due date. The app integrates a responsive UI and stores tasks in local storage for persistent data management.

---

## Features
1. **Task Management**:
   - Add, edit, and delete tasks with ease.
   - Each task includes:
     - Title
     - Description
     - Due date
     - Status (Pending, In Progress, Completed)

2. **Task Filtering**:
   - Filter tasks by:
     - Status (All, Pending, In Progress, Completed)
     - Due Date (Today, This Week, This Month, Overdue)

3. **Real-time Feedback**:
   - User-friendly notifications using **React-Toastify** for task actions like addition, update, and deletion.

4. **Responsive Design**:
   - Fully responsive UI with intuitive navigation and modal-based forms.

5. **Persistent Data**:
   - Tasks are saved in local storage to retain data across browser sessions.

---

## Components

### 1. `App.js`
The main entry point of the application. It manages global states, integrates all components, and handles task addition, update, and deletion.

### 2. `Navbar`
- Displays the application title and filtering options.
- Allows users to filter tasks by status and due date.

### 3. `TaskList`
- Renders a list of tasks.
- Supports sorting tasks by due date.
- Provides action buttons for editing and deleting tasks.

### 4. `TaskForm`
- A modal-based form for adding or editing tasks.
- Includes fields for title, description, due date, and status.

### 5. `Modal`
- A reusable modal component for displaying the task form.

---

## Installation and Setup

### Prerequisites
- **Node.js** and **npm** should be installed on your system.

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd task-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Usage

### Adding a Task
1. Click the **Add New Task** button.
2. Fill in the task details in the form.
3. Submit to add the task to the list.

### Editing a Task
1. Click the **Edit** icon on the desired task.
2. Update the task details in the form.
3. Submit to save changes.

### Deleting a Task
1. Click the **Delete** icon on the task card.
2. Confirm the deletion.

### Filtering Tasks
- Use the status and due date filters in the navbar to refine task visibility.

---

## Local Storage
- Tasks are automatically saved to local storage and reloaded on page refresh.
- Utility functions `loadTasks` and `saveTasks` manage local storage interactions.

---

## Dependencies
- **React**: Core library for building UI.
- **React Icons**: Provides icons for buttons and navigation.
- **React-Toastify**: Displays notifications.
- **UUID**: Generates unique IDs for tasks.

---

## File Structure
```
src/
├── Components/
│   ├── Navbar.js
│   ├── TaskList.js
│   ├── TaskForm.js
│   ├── Modal.js
├── utils/
│   ├── localStorage.js
├── App.css
├── App.js
├── index.js
```

---

## Future Enhancements
1. **Authentication**:
   - Allow users to log in and save tasks to a backend database.
2. **Task Priority**:
   - Add priority levels (e.g., High, Medium, Low) to tasks.
3. **Search Functionality**:
   - Enable task search by title or description.
4. **Enhanced Filters**:
   - Add custom date range filters.

---

## Acknowledgments
- Inspired by the need for a simple and efficient task management tool.
- Utilizes open-source libraries and tools for rapid development.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute or provide feedback! Happy coding! 🚀