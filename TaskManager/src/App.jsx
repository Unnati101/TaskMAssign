// App.js
import  { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { initialTasks } from './data';
import './App.css';

function App() {
  // State variable to manage tasks
  const [tasks, setTasks] = useState(initialTasks);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    < div className="App ">
      <h1>Task Tracker</h1>
      <div className='frame'>
      
      {/* Render TaskForm component to add new tasks */}
      <TaskForm addTask={addTask} />
      {/* Render TaskList component to display tasks */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
    
  );
}

export default App;
